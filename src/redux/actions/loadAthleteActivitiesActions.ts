import * as types from "./actionTypes"
import { beginApiCall, apiCallError } from "./apiStatusActions"
import axios from "axios"
import { getEndpoint } from "../utils/getActivityDataEndpoint"
import { processAthleteActivities } from "../utils/processAthleteActivities"
import { LRUCache } from "lru-cache"
import { dumbPredictData } from "../utils/dumbPredictData"
import { copyStravaActivities } from "./stravaActions"
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { collection, getDocs, getFirestore, limit, orderBy, query, where } from "firebase/firestore"
import { PAGE_SIZE } from "../../constants/constants"
import { beginLoadMoreApiCall, hasMoreActivities, hasNoMoreActivities } from "./loadMoreActions"

export const loadDataSuccess = (data: object, filter: boolean) => {
	const type = filter ? types.LOAD_FILTERED_ACTIVITIES_SUCCESS : types.LOAD_ATHLETE_ACTIVITIES_SUCCESS
	return { type, data }
}

export const loadMoreSuccess = (data: object) => {
	return { type: types.LOAD_MORE_ATHLETE_ACTIVITIES, data }
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
		dispatch(hasMoreActivities())

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
			let data = hasFilter || limit ? response.data : response.data.reverse()
			// Feed the data to the model to get the run type predictions
			let dumbPredictions = dumbPredictData(data)
			data = processAthleteActivities(response.data, dumbPredictions)

			cache.set(endpoint, data)
			if (data.length < PAGE_SIZE) dispatch(hasNoMoreActivities())
			dispatch(loadDataSuccess(data, hasFilter))

			// if the data is newer than the last backup, copy it to firestore
			if (!hasFilter && data[0].start > dateOfLastBackup) {
				dispatch(copyStravaActivities(new Date(dateOfLastBackup).getTime() / 1000))
			}
		} catch (error) {
			dispatch(apiCallError(error))
		}
	}
}

export const loadMoreAthleteActivities = () => {
	return async function (dispatch: any, getState: any) {
		const activities = getState().athleteActivities
		const activityToCompareWith = activities[activities.length - 1].start
		dispatch(beginLoadMoreApiCall())
		try {
			const auth = getAuth()
			onAuthStateChanged(auth, async (user) => {
				if (user) {
					const db = getFirestore()
					const q = query(
						collection(db, "activities"),
						where("userId", "==", user.uid),
						where("start", "<", activityToCompareWith),
						orderBy("start", "desc"),
						limit(PAGE_SIZE)
					)
					const querySnapshot = await getDocs(q)
					const activities = querySnapshot.docs.map((doc) => doc.data())
					if (activities.length < PAGE_SIZE) dispatch(hasNoMoreActivities())
					dispatch(loadMoreSuccess(activities))
				} else {
					throw new Error("No logged in user found")
				}
			})
		} catch (error: any) {
			dispatch(apiCallError(error.message))
		}
	}
}
