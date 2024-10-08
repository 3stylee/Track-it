import { UserData } from "../../models/state"
import * as types from "../actions/actionTypes"
import initialState from "../initialState"

const userDataReducer = (state = initialState.userData, action: { type: string; data: any }): UserData => {
	switch (action.type) {
		case types.LOAD_USER_DATA_SUCCESS:
			return action.data
		case types.STORE_STRAVA_AUTH_SUCCESS:
			return {
				...state,
				stravaAccess: true,
			}
		case types.REFRESH_STRAVA_TOKEN:
			return {
				...state,
				access_token: action.data.access_token,
				refresh_token: action.data.refresh_token,
				expires_at: action.data.expires_at,
			}
		case types.COPY_STRAVA_ACTVITIES:
			return {
				...state,
				dateOfLastBackup: new Date().toISOString(),
			}
		case types.LOGOUT_USER:
			return {
				...state,
				stravaAccess: false,
			}
		default:
			return state
	}
}

export default userDataReducer
