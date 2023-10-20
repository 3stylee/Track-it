import { AUTH_STATES } from "../../constants"
import * as types from "../actions/actionTypes"
import initialState from "../initialState"

const authUserReducer = (state = initialState.authState, action: { type: string }): string => {
	switch (action.type) {
		case types.AUTHORISE_USER_SUCCESS:
			return AUTH_STATES.AUTHORISED
		case types.AUTHORISE_USER_ERROR:
			return AUTH_STATES.AUTH_ERROR
		default:
			return state
	}
}

export default authUserReducer
