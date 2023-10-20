import * as types from "./actionTypes"
import { beginApiCall, apiCallError } from "./apiStatusActions"
import axios from "axios"
import { API_BASE_URL } from "../../constants"

export const loadDataSuccess = (data: string) => {
	return { type: types.LOAD_DATA_SUCCESS, data }
}

export const loadDataError = () => {
	return { type: types.LOAD_DATA_ERROR }
}

export const loadData = (type: string) => {
	return async function (dispatch: any) {
		let data = ""
		let endpoint = API_BASE_URL

		switch (type) {
			case "activities":
				endpoint += "/athlete/activities"
				break
			case "athlete":
				endpoint += "/athlete"
				break
			case "bonus":
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
			data = response.data
			dispatch(loadDataSuccess(JSON.stringify(data, undefined, 4)))
		} catch (error) {
			dispatch(loadDataError())
			dispatch(apiCallError())
			//throw error
		}
	}
}
