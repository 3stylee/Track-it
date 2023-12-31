import * as types from "../actions/actionTypes"
import initialState from "../initialState"

const actionTypeEndsInSuccess = (type: string) => {
	return type.substring(type.length - 8) === "_SUCCESS"
}

const apiCallStatusReducer = (state = initialState.apiCallsInProgress, action: { type: string }): number => {
	switch (action.type) {
		case types.BEGIN_API_CALL:
			return state + 1
		case types.AUTHORISE_USER_SUCCESS:
			return 0
		case types.API_CALL_ERROR:
			return state - 1
		default:
			if (actionTypeEndsInSuccess(action.type)) {
				return state - 1
			}
			return state
	}
}

export default apiCallStatusReducer
