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
import { INITIAL_PAGE_SIZE, PAGE_SIZE } from "../../constants/constants"
import { beginLoadMoreApiCall, hasNoMoreActivities } from "./loadMoreActions"
import { buildFilteredQuery } from "../utils/buildFilteredQuery"

export const loadDataSuccess = (data: object, hasFilter = false) => {
	const type = hasFilter ? types.LOAD_FILTERED_ACTIVITIES_SUCCESS : types.LOAD_ATHLETE_ACTIVITIES_SUCCESS
	return { type, data }
}

export const loadMoreSuccess = (data: object) => {
	return { type: types.LOAD_MORE_ATHLETE_ACTIVITIES, data }
}

let cache = new LRUCache<string, any>({ max: 5, ttl: 3600000 })

export const loadInitialAthleteActivities =
	(limit?: number, after?: number) => async (dispatch: any, getState: any) => {
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
			const { data: responseData } = await axios.get(endpoint, {
				headers: {
					Authorization: `Bearer ${access_token}`,
				},
			})

			let data = limit ? responseData : responseData.reverse()
			const dumbPredictions = dumbPredictData(data)
			data = processAthleteActivities(responseData, dumbPredictions)

			cache.set(endpoint, data)
			dispatch(loadDataSuccess(data))

			if (data.length < INITIAL_PAGE_SIZE) dispatch(hasNoMoreActivities())
			if (data[0].start > dateOfLastBackup) {
				dispatch(copyStravaActivities(new Date(dateOfLastBackup).getTime() / 1000))
			}
		} catch (error) {
			dispatch(apiCallError(error))
		}
	}

const dispatchData = (dispatch: any, activities: any, page: number, pageSize: number, hasFilter = false) => {
	dispatch(page ? loadMoreSuccess(activities) : loadDataSuccess(activities, hasFilter))
	activities.length < pageSize && dispatch(hasNoMoreActivities())
}

export const loadAthleteActivities =
	(page: number, dateBefore?: number, dateAfter?: number) => async (dispatch: any, getState: any) => {
		dispatch(page ? beginLoadMoreApiCall() : beginApiCall())
		const pageSize = page ? PAGE_SIZE : INITIAL_PAGE_SIZE
		const cacheKey = `${page}-${dateBefore}-${dateAfter}`

		if (cache.has(cacheKey)) {
			dispatchData(dispatch, cache.get(cacheKey), page, pageSize)
			return
		}

		try {
			const auth = getAuth()
			onAuthStateChanged(auth, async (user) => {
				if (!user) return
				const q = buildFilteredQuery(user.uid, getState, page, dateBefore, dateAfter)
				const activities = (await getDocs(q)).docs.map((doc) => doc.data())
				cache.set(cacheKey, activities)
				const hasFilter = dateBefore !== undefined || dateAfter !== undefined
				dispatchData(dispatch, activities, page, pageSize, hasFilter)
			})
		} catch (error) {
			dispatch(apiCallError(error))
		}
	}
