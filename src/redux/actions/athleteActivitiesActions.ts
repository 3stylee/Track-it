import * as types from "./actionTypes"
import { beginApiCall, apiCallError } from "./apiStatusActions"
import axios from "axios"
import { getEndpoint } from "../../utils/getActivityDataEndpoint"
import { processAthleteActivities } from "../../utils/processAthleteActivities"
import { LRUCache } from "lru-cache"
import { copyStravaActivities } from "./stravaActions"
import { collection, deleteDoc, getDocs, query, updateDoc, where } from "firebase/firestore"
import { FIREBASE_COLLECTIONS, PAGE_SIZE } from "../../constants/constants"
import { buildFilteredQuery } from "../../utils/buildFilteredQuery"
import { predictData } from "../../utils/predictData"
import { getRestOfAthleteActivities } from "../../utils/getRestOfAthleteActivities"
import { db } from "../../firebase"
import { ModifyCurrentActivityType } from "./currentActivityActions"
import { triggerSessionGroupsUpdate } from "./sessionsActions"

export const loadDataSuccess = (data: object, hasFilter = false) => {
	const type = hasFilter ? types.LOAD_FILTERED_ACTIVITIES_SUCCESS : types.LOAD_ATHLETE_ACTIVITIES_SUCCESS
	return { type, data }
}

export const loadMoreSuccess = (data: object) => {
	return { type: types.LOAD_MORE_ATHLETE_ACTIVITIES, data }
}

export const beginLoadMoreApiCall = () => {
	return { type: types.BEGIN_LOAD_MORE_API_CALL }
}

export const hasNoMoreActivities = () => {
	return { type: types.NO_MORE_ACTIVITIES }
}

export const nextPage = () => {
	return { type: types.NEXT_PAGE }
}

export const resetPageNumber = () => {
	return { type: types.RESET_PAGE_NUMBER }
}

export const resetListSize = () => {
	return { type: types.RESET_ATHLETE_ACTIVITIES_SIZE }
}

export const ModifyActivityType = (id: number, type: string) => {
	return {
		type: types.MODIFY_ACTIVITY_TYPE,
		data: { id, type },
	}
}

export const DeleteActivity = (id: number) => {
	return {
		type: types.DELETE_ACTIVITY,
		data: id,
	}
}

let cache = new LRUCache<string, any>({ max: 5, ttl: 3600000 })

export const loadInitialAthleteActivities =
	(limit?: number, after?: number) => async (dispatch: any, getState: any) => {
		const {
			userData: { access_token, dateOfLastBackup },
		} = getState()
		// We want to fetch data from the last backup date, nothing else
		const lastBackupEpoch = new Date(dateOfLastBackup).getTime() / 1000
		const endpoint = getEndpoint(limit, after ? after : lastBackupEpoch)

		dispatch(beginApiCall())

		if (cache.has(endpoint)) {
			dispatch(loadDataSuccess(cache.get(endpoint)))
		} else {
			try {
				// Fetch data from Strava API
				const { data: responseData } = await axios.get(endpoint, {
					headers: { Authorization: `Bearer ${access_token}` },
				})
				let data = limit ? responseData : responseData.reverse()
				if (data.length > 0) {
					const predictions = await predictData(data)
					data = processAthleteActivities(responseData, predictions)
				}

				// If not enough data for a full page, fetch the rest of the data from firestore
				if (!after && data.length < PAGE_SIZE) {
					const restOfData = await getRestOfAthleteActivities(dateOfLastBackup, data.length)
					data = data.length > 0 ? [...data, ...restOfData] : restOfData
				}

				cache.set(endpoint, data)
				dispatch(loadDataSuccess(data))

				// If we've reached the end of the data, set the flag
				if (data.length < PAGE_SIZE) dispatch(hasNoMoreActivities())
				// Copy any new activities to Firestore
				if (data[0].start > dateOfLastBackup) {
					dispatch(copyStravaActivities(lastBackupEpoch))
				}
			} catch (error) {
				dispatch(apiCallError(error))
			}
		}
	}

const dispatchData = (dispatch: any, activities: any, page: number, hasFilter = false) => {
	dispatch(page > 0 ? loadMoreSuccess(activities) : loadDataSuccess(activities, hasFilter))
	activities.length < PAGE_SIZE && dispatch(hasNoMoreActivities())
}

export const loadAthleteActivities =
	(dateBefore?: number, dateAfter?: number) => async (dispatch: any, getState: any) => {
		let {
			loadMore: { page },
		} = getState()
		if (page === 0) dispatch(beginApiCall())

		// Check if data is cached
		const hasFilter = dateBefore !== undefined || dateAfter !== undefined
		const cacheKey = `${page}-${dateBefore}-${dateAfter}`
		if (cache.has(cacheKey)) {
			dispatchData(dispatch, cache.get(cacheKey), page, hasFilter)
			return
		}
		// Otherwise, fetch data from Firestore
		try {
			const uId = localStorage.getItem("uId")
			if (!uId) return
			const q = buildFilteredQuery(uId, getState, page, dateBefore, dateAfter)
			const activities = (await getDocs(q)).docs.map((doc) => doc.data())
			cache.set(cacheKey, activities)
			dispatchData(dispatch, activities, page, hasFilter)
		} catch (error) {
			dispatch(apiCallError(error))
		}
	}

export const updateActivityType =
	(id: number, prevType: string, newType: string, currentActivity = false) =>
	async (dispatch: any) => {
		try {
			const uId = localStorage.getItem("uId")
			if (uId) {
				const q = query(
					collection(db, FIREBASE_COLLECTIONS.ACTIVITIES),
					where("userId", "==", uId),
					where("id", "==", id)
				)

				const querySnapshot = await getDocs(q)
				if (!querySnapshot.empty) {
					const docRef = querySnapshot.docs[0].ref
					await updateDoc(docRef, {
						predictedType: newType,
					})
					dispatch(currentActivity ? ModifyCurrentActivityType(id, newType) : ModifyActivityType(id, newType))

					// If we've changed a session, need to trigger a reload of session groups
					if (prevType === "Session" || newType === "Session") {
						dispatch(triggerSessionGroupsUpdate())
					}
				} else {
					console.error("No matching document found.")
				}
			} else {
				dispatch(apiCallError("Error updating type"))
			}
		} catch (error: any) {
			dispatch(apiCallError(error.message))
		}
	}

export const deleteAthleteActivity = (id: number) => async (dispatch: any) => {
	try {
		const uId = localStorage.getItem("uId")
		if (uId) {
			const q = query(
				collection(db, FIREBASE_COLLECTIONS.ACTIVITIES),
				where("userId", "==", uId),
				where("id", "==", id)
			)

			const querySnapshot = await getDocs(q)
			if (!querySnapshot.empty) {
				const docRef = querySnapshot.docs[0].ref
				await deleteDoc(docRef)
				dispatch(DeleteActivity(id))
			} else {
				console.error("No matching document found.")
			}
		} else {
			dispatch(apiCallError("No logged in user."))
		}
	} catch (error: any) {
		dispatch(apiCallError(error.message))
	}
}
