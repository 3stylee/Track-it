import * as types from "./actionTypes"
import { beginApiCall, apiCallError } from "./apiStatusActions"
import axios from "axios"
import { getEndpoint } from "../utils/getActivityDataEndpoint"
import { processAthleteActivities } from "../utils/processAthleteActivities"
import { LRUCache } from "lru-cache"
import { dumbPredictData } from "../utils/dumbPredictData"
import { copyStravaActivities } from "./stravaActions"

export const loadDataSuccess = (data: object, filter: boolean) => {
	const type = filter ? types.LOAD_FILTERED_ACTIVITIES_SUCCESS : types.LOAD_ATHLETE_ACTIVITIES_SUCCESS
	return { type, data }
}

let cache = new LRUCache<string, any>({ max: 5, ttl: 3600000 })

export const loadAthleteActivities = (
	dateBefore?: number,
	dateAfter?: number,
	hasFilter: boolean = false,
	limit?: number
) => {
	return async function (dispatch: any, getState: any) {
		const {
			userData: { access_token, dateOfLastBackup },
		} = getState()

		const endpoint = getEndpoint(dateBefore, dateAfter, limit)
		dispatch(beginApiCall())

		if (cache.has(endpoint)) {
			dispatch(loadDataSuccess(cache.get(endpoint), hasFilter))
			return
		}

		try {
			const response = await axios.get(endpoint, {
				headers: {
					Authorization: `Bearer ${access_token}`,
				},
			})
			// API returns oldest -> newest, when no filter applied
			let data = hasFilter ? response.data : response.data.reverse()
			// Feed the data to the model to get the run type predictions
			let dumbPredictions = dumbPredictData(data)
			data = processAthleteActivities(response.data, dumbPredictions)

			cache.set(endpoint, data)
			dispatch(loadDataSuccess(data, hasFilter))

			// if the data is newer than the last backup, copy it to firestore
			if (data[0].start > dateOfLastBackup) {
				dispatch(copyStravaActivities(new Date(dateOfLastBackup).getTime() / 1000))
			}
		} catch (error) {
			dispatch(apiCallError(error))
		}
	}
}
