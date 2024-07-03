import * as types from "../actions/actionTypes"
import initialState from "../initialState"

const initialActivitiesReducer = (state = initialState.gotInitialActivities, action: { type: string }): boolean => {
	switch (action.type) {
		case types.LOAD_ATHLETE_ACTIVITIES_SUCCESS:
			return true
		case types.LOAD_FILTERED_ACTIVITIES_SUCCESS:
			return false
		default:
			return state
	}
}

export default initialActivitiesReducer
