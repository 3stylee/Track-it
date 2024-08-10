import * as types from "./actionTypes"
import { beginApiCall, apiCallError } from "./apiStatusActions"
import axios from "axios"
import { API_BASE_URL, CURRENT_ACTIVITY_ERRORS } from "../../constants/constants"
import { processActivityData } from "../../utils/processActivityData"
import { getPredictedTypeFromFirebase } from "../../utils/getPredictedTypeFromFirebase"
import { reduceResolution } from "../../utils/reduceStreamResolution"

export const loadDataSuccess = (data: object) => {
	return { type: types.LOAD_CURRENT_ACTIVITY_SUCCESS, data }
}

export const loadActivityStreamSuccess = (data: any) => {
	return { type: types.LOAD_ACTIVITY_STREAM_SUCCESS, data }
}

export const ModifyCurrentActivityType = (id: number, type: string) => {
	return {
		type: types.MODIFY_CURRENT_ACTIVITY_TYPE,
		data: { id, type },
	}
}

export const loadActivityDetails = (id: number) => {
	return async function (dispatch: any, getState: any) {
		const {
			userData: { access_token },
		} = getState()

		let activityEndpoint = `${API_BASE_URL}/activities/${id}`
		let streamEndpoint = `${API_BASE_URL}/activities/${id}/streams?keys=distance,heartrate,altitude&key_by_type=true`

		dispatch(beginApiCall())
		try {
			const [activityResponse, streamResponse] = await Promise.all([
				axios.get(activityEndpoint, {
					headers: {
						Authorization: `Bearer ${access_token}`,
					},
				}),
				axios.get(streamEndpoint, {
					headers: {
						Authorization: `Bearer ${access_token}`,
					},
				}),
			])

			const predictedType = await getPredictedTypeFromFirebase(id)
			const activityData = processActivityData(activityResponse.data)
			const reducedStreamResponse = reduceResolution(streamResponse.data)

			dispatch(loadDataSuccess({ ...activityData, predictedType }))
			dispatch(loadActivityStreamSuccess(reducedStreamResponse))
		} catch (error: any) {
			dispatch(apiCallError(CURRENT_ACTIVITY_ERRORS.CURRENT_ACTIVITY_ERROR))
			console.error(error.message)
		}
	}
}
