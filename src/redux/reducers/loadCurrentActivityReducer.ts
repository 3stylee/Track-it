import * as types from "../actions/actionTypes"
import initalState from "../initialState"

const dataReducer = (state = initalState.currentActivity, action: { type: any; data: any }) => {
	switch (action.type) {
		case types.LOAD_CURRENT_ACTIVITY_SUCCESS:
			return action.data
		case types.MODIFY_CURRENT_ACTIVITY_TYPE:
			return { ...state, predictedType: action.data.type }
		default:
			return state
	}
}

export default dataReducer
