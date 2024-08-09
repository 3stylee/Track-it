import * as types from "./actionTypes"
import { apiCallError, beginApiCall } from "./apiStatusActions"
import { doc, getDoc } from "firebase/firestore"
import { APPLICATION_ERRORS, FIREBASE_COLLECTIONS } from "../../constants/constants"
import { db } from "../../firebase"

export const loadUserDataSuccess = (data: any) => {
	return { type: types.LOAD_USER_DATA_SUCCESS, data }
}

export const loadUserData = () => {
	return async function (dispatch: any) {
		dispatch(beginApiCall())
		try {
			const uId = localStorage.getItem("uId") || "noId"

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
			dispatch(apiCallError(APPLICATION_ERRORS.USER_DATA_ERROR))
			console.error(error.message)
		}
	}
}
