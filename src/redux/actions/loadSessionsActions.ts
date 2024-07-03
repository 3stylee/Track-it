import * as types from "./actionTypes"
import { apiCallError, beginApiCall } from "./apiStatusActions"
import { collection, getDocs, orderBy, query, where } from "firebase/firestore"
import { FIREBASE_COLLECTIONS, NO_LOGGED_IN_USER } from "../../constants/constants"
import { extractEntities } from "../../utils/extractFeaturesFromSession"
import { updateFirestoreSessionGroups } from "../../utils/updateFirestoreSessionGroups"
import { db } from "../../firebase"

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
	const {
		sessions,
		userData: { sessionsLastCopy },
	} = getState()
	const firstSession = sessions[0].start

	dispatch(beginApiCall())
	if (sessionsLastCopy === undefined || sessionsLastCopy < firstSession) {
		const sessionGroups = await extractEntities(sessions)
		dispatch(loadSessionGroupsSuccess(sessionGroups))
		await updateFirestoreSessionGroups(sessionGroups, dispatch)
	} else {
		try {
			const uId = localStorage.getItem("uId")
			if (uId) {
				const querySnapshot = await getDocs(
					query(collection(db, FIREBASE_COLLECTIONS.SESSION_GROUPS), where("athleteId", "==", uId))
				)
				const sessionGroups = querySnapshot.docs.map((doc) => doc.data().sessions)
				dispatch(loadSessionGroupsSuccess(sessionGroups))
			} else {
				dispatch(apiCallError(NO_LOGGED_IN_USER))
			}
		} catch (error: any) {
			dispatch(apiCallError(error.message))
		}
	}
}
