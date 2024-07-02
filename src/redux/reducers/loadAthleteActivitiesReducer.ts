import * as types from "../actions/actionTypes"
import initalState from "../initialState"

const dataReducer = (state = initalState.athleteActivities, action: { type: any; data: any }) => {
	switch (action.type) {
		case types.LOAD_ATHLETE_ACTIVITIES_SUCCESS:
			return action.data
		case types.LOAD_FILTERED_ACTIVITIES_SUCCESS:
			return action.data
		case types.LOAD_MORE_ATHLETE_ACTIVITIES:
			if (state === null) return action.data
			return [...state, ...action.data]
		default:
			return state
	}
}

export default dataReducer
