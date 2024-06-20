import initialState from "../initialState"
import * as types from "../actions/actionTypes"

const sessionReducer = (state = initialState.sessions, action: { type: any; data: any }) => {
	switch (action.type) {
		case types.LOAD_SESSIONS_SUCCESS:
			return action.data
		default:
			return state
	}
}

export default sessionReducer
