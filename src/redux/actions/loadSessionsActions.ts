import { getAuth, onAuthStateChanged } from "firebase/auth"
import * as types from "./actionTypes"
import { apiCallError, beginApiCall } from "./apiStatusActions"
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"
import { FIREBASE_COLLECTIONS, NO_LOGGED_IN_USER } from "../../constants/constants"
import { extractEntities } from "../utils/extractFeaturesFromSession"
import { updateFirestoreSessionGroups } from "../utils/updateFirestoreSessionGroups"

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
		const auth = getAuth()
		onAuthStateChanged(auth, async (user) => {
			if (user) {
				const db = getFirestore()
				const q = query(
					collection(db, FIREBASE_COLLECTIONS.ACTIVITIES),
					where("userId", "==", user.uid),
					where("predictedType", "==", "Session")
				)
				const querySnapshot = await getDocs(q)
				const sessions = querySnapshot.docs.map((doc) => doc.data())
				dispatch(loadSessionsSuccess(sessions))
			} else {
				throw new Error(NO_LOGGED_IN_USER)
			}
		})
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
			const auth = getAuth()
			onAuthStateChanged(auth, async (user) => {
				if (user) {
					const db = getFirestore()
					const querySnapshot = await getDocs(
						query(collection(db, FIREBASE_COLLECTIONS.SESSION_GROUPS), where("athleteId", "==", user.uid))
					)
					const sessionGroups = querySnapshot.docs.map((doc) => doc.data().sessions)
					dispatch(loadSessionGroupsSuccess(sessionGroups))
				} else {
					throw new Error(NO_LOGGED_IN_USER)
				}
			})
		} catch (error: any) {
			dispatch(apiCallError(error.message))
		}
	}
}
