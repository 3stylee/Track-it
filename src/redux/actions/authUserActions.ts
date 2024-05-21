import { GoogleAuthProvider, getAuth, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import { AUTH_TOKEN_BASE_URL, CLIENT_ID, CLIENT_SECRET, ROUTE_PATHS } from "../../constants/constants"
import * as types from "./actionTypes"
import { beginApiCall, apiCallError } from "./apiStatusActions"
import axios from "axios"

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
			dispatch(apiCallError(error.message))
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
			dispatch(apiCallError(error.message))
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
			dispatch(apiCallError(error.message))
			dispatch(authLogoutError())
		}
	}
}

export const getAuthToken = (code: string, refresh?: boolean) => {
	return async function (dispatch: any) {
		const payload = {
			client_id: CLIENT_ID,
			client_secret: CLIENT_SECRET,
			[refresh ? "refresh_token" : "code"]: code,
			grant_type: refresh ? "refresh_token" : "authorization_code",
		}
		dispatch(beginApiCall())
		try {
			const response = await axios.post(AUTH_TOKEN_BASE_URL, payload)
			localStorage.setItem("access_code", response.data.access_token)
			localStorage.setItem("refresh_code", response.data.refresh_token)
			localStorage.setItem("expires_at", response.data.expires_at)
			dispatch(authUserSuccess())
		} catch (error: any) {
			dispatch(apiCallError(error.message))
			dispatch(authUserError())
		}
	}
}
