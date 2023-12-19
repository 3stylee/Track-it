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

export const loadActivityData = (dateBefore?: number, dateAfter?: number) => {
	return async function (dispatch: any) {
		let endpoint = API_BASE_URL
		endpoint += "/athlete/activities"
		if (dateBefore) {
			endpoint += `?before=${dateBefore}`
		}
		if (dateAfter) {
			if (dateBefore) {
				endpoint += `&after=${dateAfter}`
			} else {
				endpoint += `?after=${dateAfter}`
			}
		}

		dispatch(beginApiCall())
		try {
			const response = await axios.get(endpoint, {
				headers: {
					Authorization: `Bearer ${localStorage.getItem("access_code")}`,
				},
			})
			dispatch(loadDataSuccess(response.data.reverse())) // For some reason the API gives data from oldest to newest
		} catch (error) {
			dispatch(loadDataError())
			dispatch(apiCallError())
			//throw error
		}
	}
}

// TODO Old Thunk for test page, remove
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
			default:
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

export const updateActivityType = (type: string) => {
	return async function (dispatch: any) {
		switch (type) {
			case DATA_TYPES.ACTIVITIES:
				dispatch(typeActivities())
				break
			case DATA_TYPES.ATHLETE:
				dispatch(typeAthlete())
				break
			default:
				break
		}
	}
}
