import { MAX_PAGES, PAGE_SIZE } from "../../constants/constants"
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
			let newState = state
			if (state.length + action.data.length > PAGE_SIZE * MAX_PAGES) {
				newState = state.slice(PAGE_SIZE, state.length)
			}
			return [...newState, ...action.data]
		case types.LOAD_PREVIOUS_ATHLETE_ACTIVITIES:
			if (state === null) return action.data
			return [...action.data, ...state.slice(0, state.length - PAGE_SIZE)]
		default:
			return state
	}
}

export default dataReducer
