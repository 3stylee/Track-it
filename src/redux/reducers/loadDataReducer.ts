import * as types from "../actions/actionTypes"
import initalState from "../initialState"

const dataReducer = (state = initalState.data, action: { type: any; data: any }) => {
	switch (action.type) {
		case types.LOAD_DATA_SUCCESS:
			return action.data
		case types.LOAD_DATA_ERROR:
			return "Sorry, we had trouble getting your data, please try again"
		default:
			return state
	}
}

export default dataReducer
