import axios from "axios"
import { API_BASE_URL } from "../../constants/constants"
import * as types from "./actionTypes"
import { apiCallError, beginApiCall } from "./apiStatusActions"
import { reduceResolution } from "../../utils/reduceStreamResolution"

export const loadActivityStreamSuccess = (data: any) => {
	return { type: types.LOAD_ACTIVITY_STREAM_SUCCESS, data }
}

export const loadActivityStream = (id: number) => {
	return async function (dispatch: any, getState: any) {
		const {
			userData: { access_token },
		} = getState()

		let endpoint = API_BASE_URL
		endpoint += `/activities/${id}/streams?keys=distance,heartrate,altitude&key_by_type=true`

		dispatch(beginApiCall())
		try {
			const response = await axios.get(endpoint, {
				headers: {
					Authorization: `Bearer ${access_token}`,
				},
			})
			const reducedResponse = reduceResolution(response.data)
			dispatch(loadActivityStreamSuccess(reducedResponse))
		} catch (error: any) {
			dispatch(apiCallError(error.message))
		}
	}
}
