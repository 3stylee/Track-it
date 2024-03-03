import * as types from "./actionTypes"
import { beginApiCall, apiCallError } from "./apiStatusActions"
import axios from "axios"
import { getEndpoint } from "../utils/getActivityDataEndpoint"
import { processAthleteActivities } from "../utils/processAthleteActivities"
import { getRunTypePredictions } from "../utils/getRunTypePredictions"
import { LRUCache } from "lru-cache"

export const loadDataSuccess = (data: object, filter: boolean) => {
	const type = filter ? types.LOAD_FILTERED_ACTIVITIES_SUCCESS : types.LOAD_ATHLETE_ACTIVITIES_SUCCESS
	return { type, data }
}

let cache = new LRUCache<string, any>({ max: 5, ttl: 3600000 })

export const loadAthleteActivities = (dateBefore?: number, dateAfter?: number, hasFilter: boolean = false) => {
	return async function (dispatch: any) {
		const endpoint = getEndpoint(dateBefore, dateAfter)
		dispatch(beginApiCall())
		if (cache.has(endpoint)) {
			dispatch(loadDataSuccess(cache.get(endpoint), hasFilter))
			return
		}

		try {
			const response = await axios.get(endpoint, {
				headers: {
					Authorization: `Bearer ${localStorage.getItem("access_code")}`,
				},
			})

			// API returns oldest -> newest, when no filter applied
			let data = hasFilter ? response.data : response.data.reverse()
			data = processAthleteActivities(data)

			// feed the data to the model to get the run type predictions
			const activities: any = []
			data.forEach(({ start, time, distance, speed, elevation, type, heartrate }: any) => {
				activities.push([start, time, distance, speed, elevation, type, heartrate])
			})
			getRunTypePredictions(activities).then((response) => {
				data = data.map((activity: any, index: number) => {
					return { ...activity, predictedType: response.result[index] }
				})
				cache.set(endpoint, data)
				dispatch(loadDataSuccess(data, hasFilter))
			})
		} catch (error) {
			dispatch(apiCallError(error))
		}
	}
}
