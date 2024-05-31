import { getAuth, onAuthStateChanged } from "firebase/auth"
import * as types from "./actionTypes"
import { apiCallError, beginApiCall } from "./apiStatusActions"
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore"
import { FIREBASE_COLLECTIONS, NO_LOGGED_IN_USER } from "../../constants/constants"

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
			const auth = getAuth()
			onAuthStateChanged(auth, async (user) => {
				if (user) {
					const db = getFirestore()
					const docRef = doc(db, FIREBASE_COLLECTIONS.USERS, user.uid)
					const docSnap = await getDoc(docRef)

					if (docSnap.exists()) {
						dispatch(loadUserDataSuccess(docSnap.data()))
					} else {
						const initialData = {
							email: user.email,
							stravaAccess: false,
						}
						await setDoc(docRef, initialData)
						dispatch(loadUserDataSuccess(initialData))
					}
				} else {
					dispatch(apiCallError(NO_LOGGED_IN_USER))
				}
			})
		} catch (error: any) {
			dispatch(apiCallError(error.message))
			dispatch(loadUserDataError())
		}
	}
}
