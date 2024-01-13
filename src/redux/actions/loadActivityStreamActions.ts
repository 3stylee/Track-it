import axios from "axios"
import { API_BASE_URL } from "../../constants"
import * as types from "./actionTypes"
import { apiCallError, beginApiCall } from "./apiStatusActions"
import { reduceResolution } from "../utils/reduceStreamResolution"

export const loadActivityStreamSuccess = (data: any) => {
	return { type: types.LOAD_ACTIVITY_STREAM_SUCCESS, data }
}

export const loadActivityStream = (activityID: number) => {
	return async function (dispatch: any) {
		let endpoint = API_BASE_URL
		endpoint += `/activities/${activityID}/streams?keys=distance,heartrate&key_by_type=true`

		dispatch(beginApiCall())
		try {
			const response = await axios.get(endpoint, {
				headers: {
					Authorization: `Bearer ${localStorage.getItem("access_code")}`,
				},
			})
			const reducedResponse = reduceResolution(response.data)
			dispatch(loadActivityStreamSuccess(reducedResponse))
		} catch (error) {
			dispatch(apiCallError(error))
		}
	}
}
