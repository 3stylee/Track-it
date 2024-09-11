import * as types from "./actionTypes"
import { beginApiCall, apiCallError } from "./apiStatusActions"
import axios from "axios"
import { getEndpoint } from "../../utils/getActivityDataEndpoint"
import { processAthleteActivities } from "../../utils/processAthleteActivities"
import { LRUCache } from "lru-cache"
import { copyStravaActivities } from "./stravaActions"
import { collection, deleteDoc, getDocs, query, updateDoc, where } from "firebase/firestore"
import {
	ACTIVITIES_LIST_ERRORS,
	ATHLETE_ACTIVITIES_ERROR,
	DELETE_ACTIVITY_ERROR,
	EDIT_URL,
	FIREBASE_COLLECTIONS,
	NO_LOGGED_IN_USER,
	PAGE_SIZE,
	UPDATE_ACTIVITY_ERROR,
} from "../../constants/constants"
import { buildFilteredQuery } from "../../utils/buildFilteredQuery"
import { predictData } from "../../utils/predictData"
import { getRestOfAthleteActivities } from "../../utils/getRestOfAthleteActivities"
import { db } from "../../firebase"
import { ModifyCurrentActivityType } from "./currentActivityActions"
import { addSession, removeSession } from "./sessionsActions"
import { calculateTRIMP } from "../../utils/calculateTRIMP"
import { refineUserModel } from "../../utils/refineUserModel"

export const loadDataSuccess = (data: object, hasFilter = false) => {
	const type = hasFilter ? types.LOAD_FILTERED_ACTIVITIES_SUCCESS : types.LOAD_ATHLETE_ACTIVITIES_SUCCESS
	return { type, data }
}

export const loadMoreSuccess = (data: object) => {
	return { type: types.LOAD_MORE_ATHLETE_ACTIVITIES_SUCCESS, data }
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

export const modifyActivityType = (id: number, type: string) => {
	return {
		type: types.MODIFY_ACTIVITY_TYPE,
		data: { id, type },
	}
}

export const deleteActivity = (id: number) => {
	return {
		type: types.DELETE_ACTIVITY,
		data: id,
	}
}

export const deleteCurrentActivity = () => {
	return {
		type: types.DELETE_CURRENT_ACTIVITY,
	}
}

export const updateActivityName = (id: number, name: string) => {
	return {
		type: types.UPDATE_ACTIVITY_NAME,
		data: { id, name },
	}
}

export const updateCurrentName = (name: string) => {
	return {
		type: types.UPDATE_CURRENT_NAME,
		data: name,
	}
}

let cache = new LRUCache<string, any>({ max: 5, ttl: 3600000 })

export const loadInitialAthleteActivities =
	(limit?: number, after?: number) => async (dispatch: any, getState: any) => {
		const {
			userData: { access_token, dateOfLastBackup, zones, sex },
		} = getState()
		// We want to fetch data after the last backup date, nothing else
		const lastBackupEpoch = new Date(dateOfLastBackup).getTime() / 1000
		const endpoint = getEndpoint(limit, lastBackupEpoch)

		dispatch(beginApiCall())

		if (cache.has(endpoint)) {
			dispatch(loadDataSuccess(cache.get(endpoint)))
		} else {
			try {
				// Fetch data from Strava API
				const { data: responseData } = await axios.get(endpoint, {
					headers: { Authorization: `Bearer ${access_token}` },
				})
				let data = responseData.reverse()
				if (data.length > 0) {
					const predictions = await predictData(data, access_token)
					data = processAthleteActivities(responseData, predictions)
					data = calculateTRIMP(data, zones, sex)
					dispatch(copyStravaActivities(data))
				}

				// If not enough data from Strava, fetch the rest of the data from firestore
				if (after) {
					const restOfData = await getRestOfAthleteActivities(
						dateOfLastBackup,
						undefined,
						new Date(after * 1000).toISOString()
					)
					data = data.length > 0 ? [...data, ...restOfData] : restOfData
				} else if (data.length < PAGE_SIZE) {
					const restOfData = await getRestOfAthleteActivities(dateOfLastBackup, data.length)
					data = data.length > 0 ? [...data, ...restOfData] : restOfData
				}

				cache.set(endpoint, data)
				dispatch(loadDataSuccess(data))

				// If we've reached the end of the data, set the flag
				if (data.length < PAGE_SIZE) dispatch(hasNoMoreActivities())
			} catch (error: any) {
				dispatch(apiCallError(ATHLETE_ACTIVITIES_ERROR))
				console.error(error.message)
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
		const loadingMore = page > 0
		if (!loadingMore) dispatch(beginApiCall())

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
		} catch (error: any) {
			dispatch(
				apiCallError(loadingMore ? ACTIVITIES_LIST_ERRORS.LOAD_MORE_ACTIVITIES_ERROR : ATHLETE_ACTIVITIES_ERROR)
			)
			console.error(error.message)
		}
	}

export const updateActivityType =
	(id: number, prevType: string, newType: string, currentActivity = false) =>
	async (dispatch: any, getState: any) => {
		try {
			const uId = localStorage.getItem("uId")
			if (uId) {
				if (prevType === "Session") dispatch(removeSession(id))
				if (newType === "Session") await dispatch(addSession(id, currentActivity))

				const q = query(
					collection(db, FIREBASE_COLLECTIONS.ACTIVITIES),
					where("userId", "==", uId),
					where("id", "==", id)
				)
				const querySnapshot = await getDocs(q)
				if (!querySnapshot.empty) {
					const docRef = querySnapshot.docs[0].ref
					refineUserModel(querySnapshot.docs[0].data, newType, getState().userData.access_token)
					await updateDoc(docRef, {
						predictedType: newType,
					})
					dispatch(currentActivity ? ModifyCurrentActivityType(id, newType) : modifyActivityType(id, newType))
				} else {
					dispatch(apiCallError(UPDATE_ACTIVITY_ERROR))
				}
			} else {
				dispatch(apiCallError(NO_LOGGED_IN_USER))
			}
		} catch (error: any) {
			dispatch(apiCallError(UPDATE_ACTIVITY_ERROR))
			console.error(error.message)
		}
	}

export const deleteAthleteActivity = (id: number, current: boolean) => async (dispatch: any) => {
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
				current && dispatch(deleteCurrentActivity())
				dispatch(deleteActivity(id))
			} else {
				dispatch(apiCallError(DELETE_ACTIVITY_ERROR))
			}
		} else {
			dispatch(apiCallError(NO_LOGGED_IN_USER))
		}
	} catch (error: any) {
		dispatch(apiCallError(DELETE_ACTIVITY_ERROR))
		console.error(error.message)
	}
}

export const editAthleteActivity =
	(id: number, data: any, current: boolean) => async (dispatch: any, getState: any) => {
		const endpoint = EDIT_URL + id
		const {
			userData: { access_token },
			athleteActivities,
			currentActivity,
		} = getState()
		let nameChanged
		if (current) {
			nameChanged = data.name !== currentActivity.name
		} else {
			nameChanged = data.name !== athleteActivities.find((activity: any) => activity.id === id).name
		}
		const updatedActivity = { ...data, hide_from_home: data.muted }
		try {
			await axios.put(endpoint, updatedActivity, {
				headers: { Authorization: `Bearer ${access_token}` },
			})
			if (nameChanged) {
				const uId = localStorage.getItem("uId")
				const q = query(
					collection(db, FIREBASE_COLLECTIONS.ACTIVITIES),
					where("userId", "==", uId),
					where("id", "==", id)
				)
				const querySnapshot = await getDocs(q)
				if (!querySnapshot.empty) {
					const docRef = querySnapshot.docs[0].ref
					await updateDoc(docRef, {
						title: data.name,
					})
				}
				dispatch(current ? updateCurrentName(data.name) : updateActivityName(id, data.name))
			}
		} catch (error: any) {
			dispatch(apiCallError(ACTIVITIES_LIST_ERRORS.EDIT_ACTIVITY_ERROR))
			console.error(error.message)
		}
	}
