import * as types from "../actions/actionTypes"
import initalState from "../initialState"

const dataReducer = (state = initalState.athleteData, action: { type: any; data: any }) => {
	switch (action.type) {
		case types.LOAD_ATHLETE_DATA_SUCCESS:
			return action.data
		default:
			return state
	}
}

export default dataReducer
