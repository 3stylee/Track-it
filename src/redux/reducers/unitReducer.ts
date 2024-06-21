import { Units } from "../../models/state"
import * as types from "../actions/actionTypes"
import initialState from "../initialState"

const unitReducer = (state = initialState.units, action: { type: string }): Units => {
	switch (action.type) {
		case types.SET_UNIT_IMPERIAL:
			return {
				unitString: "mi",
				meters: 1609.34,
			}
		case types.SET_UNIT_METRIC:
			return {
				unitString: "km",
				meters: 1000,
			}
		default:
			return state
	}
}

export default unitReducer
