import initialState from "../initialState"
import * as types from "../actions/actionTypes"

const sessionGroupReducer = (state = initialState.sessionGroups, action: { type: any; data: any }) => {
	switch (action.type) {
		case types.LOAD_SESSION_GROUPS_SUCCESS:
			return action.data
		case types.REMOVE_SESSION:
			if (Object.keys(state).length === 0) return state
			return Object.keys(state).reduce((acc, key) => {
				// @ts-ignore
				acc[key] = state[key].filter((id) => id !== action.data)
				return acc
			}, {})
		case types.UPDATE_SESSION_GROUPS:
			if (Object.keys(state).length === 0) return state
			const { key, id } = action.data
			return { ...state, [key]: [...(state[key] || []), id] }
		default:
			return state
	}
}

export default sessionGroupReducer
