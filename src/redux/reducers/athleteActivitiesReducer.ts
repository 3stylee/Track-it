import { PAGE_SIZE } from "../../constants/constants"
import * as types from "../actions/actionTypes"
import initalState from "../initialState"

const dataReducer = (state = initalState.athleteActivities, action: { type: any; data: any }) => {
	switch (action.type) {
		case types.LOAD_ATHLETE_ACTIVITIES_SUCCESS:
			return action.data
		case types.LOAD_FILTERED_ACTIVITIES_SUCCESS:
			return action.data
		case types.LOAD_MORE_ATHLETE_ACTIVITIES_SUCCESS:
			if (state === null) return action.data
			return [...state, ...action.data]
		case types.RESET_ATHLETE_ACTIVITIES_SIZE:
			if (state === null) return action.data
			return [...state.slice(0, PAGE_SIZE)]
		case types.MODIFY_ACTIVITY_TYPE:
			if (state === null) return state
			return state.map((activity: { id: number; predictedType: string }) => {
				if (activity.id === action.data.id) {
					return { ...activity, predictedType: action.data.type }
				}
				return activity
			})
		case types.DELETE_ACTIVITY:
			if (state === null) return state
			return state.filter((activity: { id: number }) => activity.id !== action.data)
		case types.UPDATE_ACTIVITY_NAME:
			if (state === null) return state
			return state.map((activity) => {
				if (activity.id === action.data.id) {
					return { ...activity, title: action.data.name }
				}
				return activity
			})
		default:
			return state
	}
}

export default dataReducer
