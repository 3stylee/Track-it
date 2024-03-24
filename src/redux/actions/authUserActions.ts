import { AUTH_TOKEN_BASE_URL, CLIENT_ID, CLIENT_SECRET } from "../../constants/constants"
import * as types from "./actionTypes"
import { beginApiCall, apiCallError } from "./apiStatusActions"
import axios from "axios"

export const authUserSuccess = () => {
	return { type: types.AUTHORISE_USER_SUCCESS }
}

export const authUserError = () => {
	return { type: types.AUTHORISE_USER_ERROR }
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
		} catch (error) {
			dispatch(apiCallError)
			dispatch(authUserError)
		}
	}
}
