import { UNIT_VALUES } from "../../constants/constants"
import { Units } from "../../models/state"
import * as types from "../actions/actionTypes"
import initialState from "../initialState"

const unitReducer = (state = initialState.units, action: { type: string }): Units => {
	switch (action.type) {
		case types.SET_UNIT_IMPERIAL:
			return UNIT_VALUES.IMPERIAL
		case types.SET_UNIT_METRIC:
			return UNIT_VALUES.METRIC
		default:
			return state
	}
}

export default unitReducer
