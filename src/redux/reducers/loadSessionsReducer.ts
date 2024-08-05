import initialState from "../initialState"
import * as types from "../actions/actionTypes"

const sessionReducer = (state = initialState.sessions, action: { type: any; data: any }) => {
	switch (action.type) {
		case types.LOAD_SESSIONS_SUCCESS:
			return action.data
		case types.TRIGGER_SESSION_GROUPS_UPDATE:
			return []
		default:
			return state
	}
}

export default sessionReducer
