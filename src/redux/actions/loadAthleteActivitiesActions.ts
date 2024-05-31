import * as types from "./actionTypes"
import { beginApiCall, apiCallError } from "./apiStatusActions"
import axios from "axios"
import { getEndpoint } from "../utils/getActivityDataEndpoint"
import { processAthleteActivities } from "../utils/processAthleteActivities"
import { LRUCache } from "lru-cache"
import { dumbPredictData } from "../utils/dumbPredictData"
import { copyStravaActivities } from "./stravaActions"
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { getDocs } from "firebase/firestore"
import { NO_LOGGED_IN_USER, PAGE_SIZE } from "../../constants/constants"
import { beginLoadMoreApiCall, hasNoMoreActivities } from "./loadMoreActions"
import { buildFilteredQuery } from "../utils/buildFilteredQuery"

export const loadDataSuccess = (data: object) => {
	return { type: types.LOAD_ATHLETE_ACTIVITIES_SUCCESS, data }
}

export const loadMoreSuccess = (data: object) => {
	return { type: types.LOAD_MORE_ATHLETE_ACTIVITIES, data }
}

export const clearFilter = () => {
	return { type: types.CLEAR_FILTER }
}

let cache = new LRUCache<string, any>({ max: 5, ttl: 3600000 })

export const loadInitialAthleteActivities = (limit?: number, after?: number) => {
	return async function (dispatch: any, getState: any) {
		const {
			userData: { access_token, dateOfLastBackup },
		} = getState()
		const endpoint = getEndpoint(limit, after)

		dispatch(beginApiCall())
		if (cache.has(endpoint)) {
			dispatch(loadDataSuccess(cache.get(endpoint)))
			return
		}
		try {
			const response = await axios.get(endpoint, {
				headers: {
					Authorization: `Bearer ${access_token}`,
				},
			})
			// API returns oldest -> newest, when no limit applied
			let data = limit ? response.data : response.data.reverse()
			// Feed the data to the model to get the run type predictions
			let dumbPredictions = dumbPredictData(data)
			data = processAthleteActivities(response.data, dumbPredictions)

			cache.set(endpoint, data)
			dispatch(loadDataSuccess(data))
			if (data.length < PAGE_SIZE) dispatch(hasNoMoreActivities())

			// if the data is newer than the last backup, copy it to firestore
			if (data[0].start > dateOfLastBackup) {
				dispatch(copyStravaActivities(new Date(dateOfLastBackup).getTime() / 1000))
			}
		} catch (error) {
			dispatch(apiCallError(error))
		}
	}
}

export const loadAthleteActivities = (page: number, dateBefore?: number, dateAfter?: number) => {
	return async function (dispatch: any, getState: any) {
		dispatch(page > 0 ? beginLoadMoreApiCall() : beginApiCall())
		try {
			const auth = getAuth()
			onAuthStateChanged(auth, async (user) => {
				if (user) {
					const q = buildFilteredQuery(user.uid, getState, page, dateBefore, dateAfter)
					const querySnapshot = await getDocs(q)
					const activities = querySnapshot.docs.map((doc) => doc.data())
					dispatch(page > 0 ? loadMoreSuccess(activities) : loadDataSuccess(activities))
					if (activities.length < PAGE_SIZE) dispatch(hasNoMoreActivities())
				} else {
					throw new Error(NO_LOGGED_IN_USER)
				}
			})
		} catch (error: any) {
			dispatch(apiCallError(error.message))
		}
	}
}
