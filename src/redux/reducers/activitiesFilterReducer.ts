import * as types from "../actions/actionTypes"
import initialState from "../initialState"

const activityStreamReducer = (state = initialState.activitiesHasFilter, action: { type: any }) => {
	switch (action.type) {
		case types.LOAD_FILTERED_ACTIVITIES_SUCCESS:
			return true
		case types.LOAD_ATHLETE_ACTIVITIES_SUCCESS:
			return false
		default:
			return state
	}
}

export default activityStreamReducer
