import * as types from "./actionTypes"
import { beginApiCall, apiCallError } from "./apiStatusActions"
import axios from "axios"
import { getEndpoint } from "../utils/getActivityDataEndpoint"
import { processAthleteActivities } from "../utils/processAthleteActivities"

export const loadDataSuccess = (data: object) => {
	return { type: types.LOAD_ATHLETE_ACTIVITIES_SUCCESS, data }
}

export const loadAthleteActivities = (dateBefore?: number, dateAfter?: number) => {
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
			const data = processAthleteActivities(response.data.reverse())
			dispatch(loadDataSuccess(data))
		} catch (error) {
			dispatch(apiCallError(error))
		}
	}
}
