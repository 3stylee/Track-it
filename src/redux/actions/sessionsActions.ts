import * as types from "./actionTypes"
import { apiCallError, beginApiCall } from "./apiStatusActions"
import { collection, getDocs, orderBy, query, where } from "firebase/firestore"
import { FIREBASE_COLLECTIONS, NO_LOGGED_IN_USER } from "../../constants/constants"
import { db } from "../../firebase"
import { removeSpaces } from "../../utils/removeSpaces"
import axios from "axios"
import { addKeysToSessions } from "../../utils/addKeysToSessions.ts"
import { Session } from "../../models/sessions"

export const loadSessionsSuccess = (data: any) => {
	return { type: types.LOAD_SESSIONS_SUCCESS, data }
}

export const removeSession = (id: number) => {
	return { type: "REMOVE_SESSION", data: id }
}

export const addNewSession = (data: any) => {
	return { type: types.ADD_SESSION, data }
}

export const loadSessions = () => async (dispatch: any) => {
	dispatch(beginApiCall())
	try {
		const uId = localStorage.getItem("uId")
		if (uId) {
			const q = query(
				collection(db, FIREBASE_COLLECTIONS.ACTIVITIES),
				where("userId", "==", uId),
				where("predictedType", "==", "Session"),
				orderBy("start", "desc")
			)
			const querySnapshot = await getDocs(q)
			let sessions = querySnapshot.docs.map((doc) => doc.data() as Session)
			const sessionGroups = await loadSessionGroups(sessions)
			sessions = addKeysToSessions(sessions, sessionGroups)
			dispatch(loadSessionsSuccess(sessions))
		} else {
			dispatch(apiCallError(NO_LOGGED_IN_USER))
		}
	} catch (error: any) {
		dispatch(apiCallError(error.message))
	}
}

const loadSessionGroups = async (sessions: any) => {
	const sessionsNew = []
	for (const session of sessions) {
		sessionsNew.push({
			id: session.id,
			title: removeSpaces(session.title),
		})
	}
	try {
		const response = await axios.post(
			"https://urchin-app-q9ue8.ondigitalocean.app/extract_entities",
			{ sessions: sessionsNew },
			{
				headers: {
					"Content-Type": "application/json",
				},
			}
		)
		return response.data
	} catch (e) {
		throw e
	}
}

export const addSession = (id: number) => async (dispatch: any, getState: any) => {
	const { athleteActivities } = getState()
	const session = athleteActivities.find((activity: any) => activity.id === id)
	try {
		const response = await axios.post(
			"https://urchin-app-q9ue8.ondigitalocean.app/get_key",
			{ session: { id: session.id, title: session.title } },
			{
				headers: {
					"Content-Type": "application/json",
				},
			}
		)
		const key = response.data
		dispatch(addNewSession({ ...session, key }))
	} catch (error: any) {
		dispatch(apiCallError(error.message))
	}
}
