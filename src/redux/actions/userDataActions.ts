import * as types from "./actionTypes"
import { apiCallError, beginApiCall } from "./apiStatusActions"
import { doc, getDoc, getFirestore } from "firebase/firestore"
import { FIREBASE_COLLECTIONS } from "../../constants/constants"

export const loadUserDataSuccess = (data: any) => {
	return { type: types.LOAD_USER_DATA_SUCCESS, data }
}

export const loadUserDataError = () => {
	return { type: types.LOAD_USER_DATA_ERROR }
}

export const loadUserData = () => {
	return async function (dispatch: any) {
		dispatch(beginApiCall())
		try {
			const uId = localStorage.getItem("uId") || "noId"

			const db = getFirestore()
			const docRef = doc(db, FIREBASE_COLLECTIONS.USERS, uId)
			const docSnap = await getDoc(docRef)

			if (docSnap.exists()) {
				dispatch(loadUserDataSuccess(docSnap.data()))
			} else {
				const initialData = {
					stravaAccess: false,
				}
				dispatch(loadUserDataSuccess(initialData))
			}
		} catch (error: any) {
			dispatch(apiCallError(error.message))
			dispatch(loadUserDataError())
		}
	}
}
