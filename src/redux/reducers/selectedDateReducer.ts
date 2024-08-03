import * as types from "../actions/actionTypes"
import initalState from "../initialState"

const selectedDateReducer = (state = initalState.selectedDate, action: { type: any; data: any }) => {
	switch (action.type) {
		case types.RESET_SELECTED_DATE:
			return new Date()
		case types.UPDATE_SELECTED_DATE:
			return action.data
		default:
			return state
	}
}

export default selectedDateReducer
