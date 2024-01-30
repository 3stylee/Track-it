import * as types from "../actions/actionTypes"
import initialState from "../initialState"

const activityStreamReducer = (state = initialState.currentActivityStream, action: { type: any; data: any }) => {
	switch (action.type) {
		case types.LOAD_ACTIVITY_STREAM_SUCCESS:
			return action.data
		case types.CLEAR_ACTIVITY_STREAM:
			return {}
		default:
			return state
	}
}

export default activityStreamReducer
