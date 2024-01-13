import * as types from "./actionTypes"
import { beginApiCall, apiCallError } from "./apiStatusActions"
import axios from "axios"
import { getEndpoint } from "../utils/getActivityDataEndpoint"

export const loadDataSuccess = (data: object) => {
	return { type: types.LOAD_ACTIVITY_DATA_SUCCESS, data }
}

export const loadActivityData = (dateBefore?: number, dateAfter?: number) => {
	return async function (dispatch: any) {
		const endpoint = getEndpoint(dateBefore, dateAfter)
		dispatch(beginApiCall())
		try {
			const response = await axios.get(endpoint, {
				headers: {
					Authorization: `Bearer ${localStorage.getItem("access_code")}`,
				},
			})
			// For some reason the API gives data from oldest to newest, we want the opposite
			dispatch(loadDataSuccess(response.data.reverse()))
		} catch (error) {
			dispatch(apiCallError(error))
		}
	}
}
