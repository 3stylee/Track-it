import * as types from "../actions/actionTypes"
import initialState from "../initialState"

const actionTypeEndsInSuccess = (type: string) => {
	return type.substring(type.length - 8) === "_SUCCESS"
}

const apiErrorReducer = (state = initialState.apiError, action: { type: string; data: any }): string | object => {
	switch (action.type) {
		case types.API_CALL_ERROR:
			return {
				message: action.data || "An error occurred",
				status: state.status + 1,
			}
		default:
			// clear error message when a successful API call is made
			if (actionTypeEndsInSuccess(action.type)) {
				return {
					message: "",
					status: 0,
				}
			}
			return state
	}
}

export default apiErrorReducer
