import { getAuth, onAuthStateChanged } from "firebase/auth"
import * as types from "./actionTypes"
import { apiCallError, beginApiCall } from "./apiStatusActions"
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore"

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
					const docRef = doc(db, "users", user.uid)
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
					dispatch(apiCallError("User not logged in"))
				}
			})
		} catch (error: any) {
			dispatch(apiCallError(error.message))
			dispatch(loadUserDataError())
		}
	}
}
