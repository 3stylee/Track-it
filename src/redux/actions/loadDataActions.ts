import * as types from "./actionTypes"
import { beginApiCall, apiCallError } from "./apiStatusActions"
import axios from "axios"
import { API_BASE_URL, DATA_TYPES } from "../../constants"

export const loadDataSuccess = (data: object) => {
	return { type: types.LOAD_DATA_SUCCESS, data }
}

export const loadDataError = () => {
	return { type: types.LOAD_DATA_ERROR }
}

export const typeActivities = () => {
	return { type: types.DATA_TYPE_ACTIVITIES }
}

export const typeAthlete = () => {
	return { type: types.DATA_TYPE_ATHLETE }
}

export const loadData = (type: string) => {
	return async function (dispatch: any) {
		let activityTypeCallback
		let endpoint = API_BASE_URL

		switch (type) {
			case DATA_TYPES.ACTIVITIES:
				endpoint += "/athlete/activities"
				activityTypeCallback = typeActivities()
				break
			case DATA_TYPES.ATHLETE:
				endpoint += "/athlete"
				activityTypeCallback = typeAthlete()
				break
			case DATA_TYPES.BONUS:
				endpoint += ""
				break
		}

		dispatch(beginApiCall())
		try {
			const response = await axios.get(endpoint, {
				headers: {
					Authorization: `Bearer ${localStorage.getItem("access_code")}`,
				},
			})
			dispatch(loadDataSuccess(response.data))
			dispatch(activityTypeCallback)
		} catch (error) {
			dispatch(loadDataError())
			dispatch(apiCallError())
			//throw error
		}
	}
}
