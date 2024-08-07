import * as types from "./actionTypes"
import { beginApiCall, apiCallError } from "./apiStatusActions"
import axios from "axios"
import { API_BASE_URL } from "../../constants/constants"
import { processActivityData } from "../../utils/processActivityData"
import { getPredictedTypeFromFirebase } from "../../utils/getPredictedTypeFromFirebase"

export const loadDataSuccess = (data: object) => {
	return { type: types.LOAD_CURRENT_ACTIVITY_SUCCESS, data }
}

export const ModifyCurrentActivityType = (id: number, type: string) => {
	return {
		type: types.MODIFY_CURRENT_ACTIVITY_TYPE,
		data: { id, type },
	}
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
			const predictedType = await getPredictedTypeFromFirebase(id)
			const data = processActivityData(response.data)
			dispatch(loadDataSuccess({ ...data, predictedType }))
		} catch (error: any) {
			dispatch(apiCallError(error.message))
		}
	}
}
