import { DATA_TYPES } from "../../constants"
import * as types from "../actions/actionTypes"
import initialState from "../initialState"

const dataTypeReducer = (state = initialState.dataType, action: { type: any }) => {
	switch (action.type) {
		case types.DATA_TYPE_ACTIVITIES:
			return DATA_TYPES.ACTIVITIES
		case types.DATA_TYPE_ATHLETE:
			return DATA_TYPES.ATHLETE
		default:
			return state
	}
}

export default dataTypeReducer
