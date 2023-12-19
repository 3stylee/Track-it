import { DATA_ERROR_MESSAGE } from "../../constants"
import * as types from "../actions/actionTypes"
import initalState from "../initialState"

const dataReducer = (state = initalState.activityData, action: { type: any; data: any }) => {
	switch (action.type) {
		case types.LOAD_DATA_SUCCESS:
			return action.data
		case types.LOAD_DATA_ERROR:
			return { text: DATA_ERROR_MESSAGE }
		default:
			return state
	}
}

export default dataReducer
