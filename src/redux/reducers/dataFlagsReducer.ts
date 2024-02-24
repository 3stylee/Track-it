import * as types from "../actions/actionTypes"
import initialState from "../initialState"

const apiErrorReducer = (state = initialState.dataFlags, action: { type: string }): object => {
	switch (action.type) {
		case types.LOAD_ATHLETE_DATA_SUCCESS:
			return { ...state, gotAthleteData: true }
		case types.LOAD_ATHLETE_ACTIVITIES_SUCCESS:
			return { ...state, gotInitialActivities: true }
		case types.LOAD_FILTERED_ACTIVITIES_SUCCESS:
			return { ...state, gotInitialActivities: false }
		default:
			return state
	}
}

export default apiErrorReducer
