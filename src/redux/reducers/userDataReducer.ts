import { UserData } from "../../models"
import * as types from "../actions/actionTypes"
import initialState from "../initialState"

const userDataReducer = (state = initialState.userData, action: { type: string; data: UserData }): UserData => {
	switch (action.type) {
		case types.LOAD_USER_DATA_SUCCESS:
			return action.data
		case types.LOAD_USER_DATA_ERROR:
			return {
				stravaAccess: false,
				email: "",
			}
		default:
			return state
	}
}

export default userDataReducer
