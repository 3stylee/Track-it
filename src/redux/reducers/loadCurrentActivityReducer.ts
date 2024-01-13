import * as types from "../actions/actionTypes"
import initalState from "../initialState"

const dataReducer = (state = initalState.currentActivity, action: { type: any; data: any }) => {
	switch (action.type) {
		case types.LOAD_CURRENT_ACTIVITY_SUCCESS:
			return action.data
		default:
			return state
	}
}

export default dataReducer
