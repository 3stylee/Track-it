import * as types from "./actionTypes"
import { beginApiCall, apiCallError } from "./apiStatusActions"
import axios from "axios"
import { API_BASE_URL } from "../../constants"
import { processActivityData } from "../utils/processActivityData"

export const loadDataSuccess = (data: object) => {
	return { type: types.LOAD_CURRENT_ACTIVITY_SUCCESS, data }
}

export const loadCurrentActivity = (id: number) => {
	return async function (dispatch: any) {
		let endpoint = API_BASE_URL
		endpoint += `/activities/${id}`

		dispatch(beginApiCall())
		try {
			const response = await axios.get(endpoint, {
				headers: {
					Authorization: `Bearer ${localStorage.getItem("access_code")}`,
				},
			})
			const data = processActivityData(response.data)
			dispatch(loadDataSuccess(data))
		} catch (error) {
			dispatch(apiCallError(error))
		}
	}
}
