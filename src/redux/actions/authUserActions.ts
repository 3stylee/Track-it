import { GoogleAuthProvider, getAuth, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import { ROUTE_PATHS } from "../../constants/constants"
import * as types from "./actionTypes"
import { beginApiCall, apiCallError } from "./apiStatusActions"
import { getFirebaseError } from "../utils/getFirebaseError"

export const manualAuthUser = () => {
	return { type: types.MANUAL_AUTHORISE_USER }
}

export const authUserSuccess = () => {
	return { type: types.AUTHORISE_USER_SUCCESS }
}

export const authUserError = () => {
	return { type: types.AUTHORISE_USER_ERROR }
}

export const authLogoutSuccess = () => {
	return { type: types.LOGOUT_USER_SUCCESS }
}

export const authLogoutError = () => {
	return { type: types.LOGOUT_USER_ERROR }
}

export const authUser = (email: string, password: string, navigate: (path: string) => void) => {
	return async function (dispatch: any) {
		const auth = getAuth()
		dispatch(beginApiCall())
		try {
			await signInWithEmailAndPassword(auth, email, password)
			dispatch(authUserSuccess())
			navigate(ROUTE_PATHS.HOME)
		} catch (error: any) {
			dispatch(apiCallError(getFirebaseError(error.code)))
			dispatch(authUserError())
		}
	}
}

export const authGoogleUser = (navigate: (path: string) => void) => {
	return async function (dispatch: any) {
		const auth = getAuth()
		const provider = new GoogleAuthProvider()
		dispatch(beginApiCall())
		try {
			await signInWithPopup(auth, provider)
			dispatch(authUserSuccess())
			navigate(ROUTE_PATHS.HOME)
		} catch (error: any) {
			console.error("Error signing in: ", error)
			dispatch(apiCallError(getFirebaseError(error.code)))
			dispatch(authUserError())
		}
	}
}

export const logoutUser = () => {
	return async function (dispatch: any) {
		const auth = getAuth()
		dispatch(beginApiCall())
		try {
			await signOut(auth)
			dispatch(authLogoutSuccess())
		} catch (error: any) {
			console.error("Error signing out: ", error)
			dispatch(apiCallError(getFirebaseError(error.code)))
			dispatch(authLogoutError())
		}
	}
}
