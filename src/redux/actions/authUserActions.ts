import * as types from "./actionTypes"
import { beginApiCall, apiCallError } from "./apiStatusActions"
import axios from "axios"

export const authUserSuccess = () => {
	return { type: types.AUTHORISE_USER_SUCCESS }
}

export const authUserError = () => {
	return { type: types.AUTHORISE_USER_ERROR }
}

export const getAuthToken = (
	code: string,
	baseURl: string,
	client_id: string,
	client_secret: string,
	refresh?: boolean
) => {
	return async function (dispatch: any) {
		const payload = {
			client_id: client_id,
			client_secret: client_secret,
			[refresh ? "refresh_token" : "code"]: code,
			grant_type: refresh ? "refresh_token" : "authorization_code",
		}
		dispatch(beginApiCall())
		try {
			const response = await axios.post(baseURl, payload)
			localStorage.setItem("access_code", response.data.access_token)
			localStorage.setItem("refresh_code", response.data.refresh_token)
			dispatch(authUserSuccess())
		} catch (error) {
			dispatch(apiCallError)
			dispatch(authUserError)
		}
	}
}
