import * as types from "./actionTypes"
import { apiCallError, beginApiCall } from "./apiStatusActions"
import { collection, getDocs, orderBy, query, where } from "firebase/firestore"
import { FIREBASE_COLLECTIONS, NO_LOGGED_IN_USER } from "../../constants/constants"
import { db } from "../../firebase"
import { removeSpaces } from "../../utils/removeSpaces"
import axios from "axios"

export const loadSessionsSuccess = (data: any) => {
	return { type: types.LOAD_SESSIONS_SUCCESS, data }
}

export const loadSessionGroupsSuccess = (data: any) => {
	return { type: types.LOAD_SESSION_GROUPS_SUCCESS, data }
}

export const updateFirestoreSessions = () => {
	return { type: types.UPDATE_FIRESTORE_SESSIONS }
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
			const sessions = querySnapshot.docs.map((doc) => doc.data())
			dispatch(loadSessionsSuccess(sessions))
		} else {
			dispatch(apiCallError(NO_LOGGED_IN_USER))
		}
	} catch (error: any) {
		dispatch(apiCallError(error.message))
	}
}

export const loadSessionGroups = () => async (dispatch: any, getState: any) => {
	const { sessions } = getState()
	dispatch(beginApiCall())
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
		dispatch(loadSessionGroupsSuccess(response.data))
	} catch (error: any) {
		dispatch(apiCallError(error.message))
	}
}
