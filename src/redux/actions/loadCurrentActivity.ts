import * as types from "./actionTypes"
import { beginApiCall, apiCallError } from "./apiStatusActions"
import axios from "axios"
import { API_BASE_URL } from "../../constants/constants"
import { processActivityData } from "../utils/processActivityData"
import { predictData } from "../utils/predictData"

export const loadDataSuccess = (data: object) => {
	return { type: types.LOAD_CURRENT_ACTIVITY_SUCCESS, data }
}

export const loadCurrentActivity = (id: number) => {
	return async function (dispatch: any, getState: any) {
		const {
			userData: { access_token },
		} = getState()

		let endpoint = API_BASE_URL
		endpoint += `/activities/${id}`

		dispatch(beginApiCall())
		try {
			const response = await axios.get(endpoint, {
				headers: {
					Authorization: `Bearer ${access_token}`,
				},
			})
			const predictedType = predictData([response.data])
			const data = processActivityData(response.data)
			dispatch(loadDataSuccess({ ...data, predictedType: predictedType[0] }))
		} catch (error) {
			dispatch(apiCallError(error))
		}
	}
}
