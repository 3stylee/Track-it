import initialState from "../initialState"
import * as types from "../actions/actionTypes"

const sessionReducer = (state = initialState.sessions, action: { type: any; data: any }) => {
	switch (action.type) {
		case types.LOAD_SESSIONS_SUCCESS:
			return action.data
		case types.REMOVE_SESSION:
			if (state.length === 0) return state
			return state.filter((session) => session.id !== action.data)
		case types.ADD_SESSION:
			if (state.length === 0) return state
			return [...state, action.data]
		default:
			return state
	}
}

export default sessionReducer
