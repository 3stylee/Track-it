import * as types from "../actions/actionTypes"
import initalState from "../initialState"

const dataReducer = (state = initalState.activityData, action: { type: any; data: any }) => {
	switch (action.type) {
		case types.LOAD_ACTIVITY_DATA_SUCCESS:
			return action.data
		default:
			return state
	}
}

export default dataReducer
