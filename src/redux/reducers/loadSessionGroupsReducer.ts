import initialState from "../initialState"
import * as types from "../actions/actionTypes"

const sessionGroupReducer = (state = initialState.sessionGroups, action: { type: any; data: any }) => {
	switch (action.type) {
		case types.LOAD_SESSION_GROUPS_SUCCESS:
			return action.data
		case types.TRIGGER_SESSION_GROUPS_UPDATE:
			return []
		default:
			return state
	}
}

export default sessionGroupReducer
