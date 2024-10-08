import * as types from "./actionTypes"
import { beginApiCall, apiCallError } from "./apiStatusActions"
import axios from "axios"
import { API_BASE_URL, DASHBOARD_ERRORS } from "../../constants/constants"
import { processAthleteData } from "../../utils/processAthleteData"

export const loadDataSuccess = (data: object) => {
	return { type: types.LOAD_ATHLETE_DATA_SUCCESS, data }
}

export const loadAthleteData = (athleteID: number) => {
	return async function (dispatch: any, getState: any) {
		const {
			userData: { access_token },
		} = getState()

		let endpoint = API_BASE_URL
		endpoint += `/athletes/${athleteID}/stats`

		dispatch(beginApiCall())
		try {
			const response = await axios.get(endpoint, {
				headers: {
					Authorization: `Bearer ${access_token}`,
				},
			})
			const processedData = processAthleteData(response.data)
			dispatch(loadDataSuccess(processedData))
		} catch (error: any) {
			dispatch(apiCallError(DASHBOARD_ERRORS.ATHLETE_DATA_ERROR))
			console.error(error.message)
		}
	}
}
