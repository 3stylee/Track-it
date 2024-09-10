import * as types from "../actions/actionTypes"
import initalState from "../initialState"

const dataReducer = (state = initalState.currentActivity, action: { type: any; data: any }) => {
	switch (action.type) {
		case types.LOAD_CURRENT_ACTIVITY_SUCCESS:
			return action.data
		case types.MODIFY_CURRENT_ACTIVITY_TYPE:
			return { ...state, predictedType: action.data.type }
		case types.DELETE_CURRENT_ACTIVITY:
			return {}
		case types.UPDATE_CURRENT_NAME:
			return { ...state, name: action.data }
		default:
			return state
	}
}

export default dataReducer
