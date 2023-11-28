import * as types from "../actions/actionTypes"
import initialState from "../initialState"

const sidebarReducer = (state = initialState.sidebarExpanded, action: { type: string }): boolean => {
	switch (action.type) {
		case types.OPEN_SIDEBAR:
			return true
		case types.CLOSE_SIDEBAR:
			return false
		default:
			return state
	}
}

export default sidebarReducer
