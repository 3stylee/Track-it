import * as types from "./actionTypes"
import { beginApiCall, apiCallError } from "./apiStatusActions"
import axios from "axios"
import { API_BASE_URL } from "../../constants"

export const loadDataSuccess = (data: object) => {
	return { type: types.LOAD_ACTIVITY_DATA_SUCCESS, data }
}

export const loadDataError = () => {
	return { type: types.LOAD_DATA_ERROR }
}

export const loadActivityData = (dateBefore?: number, dateAfter?: number) => {
	return async function (dispatch: any) {
		let endpoint = API_BASE_URL
		endpoint += "/athlete/activities"
		if (dateBefore || dateAfter) {
			if (dateBefore) {
				endpoint += `?before=${dateBefore}`
			}
			if (dateAfter && dateBefore) {
				endpoint += `&after=${dateAfter}`
			} else {
				endpoint += `?after=${dateAfter}`
			}
			// The API limits the response data to 30 activities by default, and when passed as a parameter
			// it maxes out at 200. If a user has more than that over the course of a given month
			// then we will miss some activities. Unlikely to cause issues but possible
			endpoint += "&per_page=200"
		} else {
			endpoint += "?per_page=200"
		}

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
			dispatch(loadDataError())
			dispatch(apiCallError())
			//throw error
		}
	}
}
