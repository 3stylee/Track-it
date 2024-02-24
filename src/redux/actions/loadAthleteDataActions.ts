import * as types from "./actionTypes"
import { beginApiCall, apiCallError } from "./apiStatusActions"
import axios from "axios"
import { API_BASE_URL } from "../../constants"
import { processAthleteData } from "../utils/processAthleteData"

export const loadDataSuccess = (data: object) => {
	return { type: types.LOAD_ATHLETE_DATA_SUCCESS, data }
}

export const loadAthleteData = (athleteID: number) => {
	return async function (dispatch: any) {
		let endpoint = API_BASE_URL
		endpoint += `/athletes/${athleteID}/stats`

		dispatch(beginApiCall())
		try {
			const response = await axios.get(endpoint, {
				headers: {
					Authorization: `Bearer ${localStorage.getItem("access_code")}`,
				},
			})
			const processedData = processAthleteData(response.data)
			dispatch(loadDataSuccess(processedData))
		} catch (error) {
			dispatch(apiCallError(error))
		}
	}
}
