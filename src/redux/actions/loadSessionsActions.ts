import { getAuth, onAuthStateChanged } from "firebase/auth"
import * as types from "./actionTypes"
import { apiCallError, beginApiCall } from "./apiStatusActions"
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"

export const loadSessionsSuccess = (data: any) => {
	return { type: types.LOAD_SESSIONS_SUCCESS, data }
}

export const loadSessions = () => {
	return function (dispatch: any) {
		dispatch(beginApiCall())
		try {
			const auth = getAuth()
			onAuthStateChanged(auth, async (user) => {
				if (user) {
					const db = getFirestore()
					const q = query(
						collection(db, "activities"),
						where("userId", "==", user.uid),
						where("predictedType", "==", "Session")
					)
					const querySnapshot = await getDocs(q)
					const sessions = querySnapshot.docs.map((doc) => doc.data())
					dispatch(loadSessionsSuccess(sessions))
				} else {
					throw new Error("No logged in user found")
				}
			})
		} catch (error: any) {
			dispatch(apiCallError(error.message))
		}
	}
}
