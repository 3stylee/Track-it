import axios from "axios"
import {
	APPLICATION_ERRORS,
	AUTH_TOKEN_BASE_URL,
	CLIENT_ID,
	CLIENT_SECRET,
	FIREBASE_COLLECTIONS,
	NO_LOGGED_IN_USER,
	ZONES_URL,
} from "../../constants/constants"
import * as types from "./actionTypes"
import { apiCallError, beginApiCall } from "./apiStatusActions"
import { doc, setDoc, writeBatch } from "firebase/firestore"
import { getEndpoint } from "../../utils/getActivityDataEndpoint"
import { getNewActivities } from "../../utils/getNewActivites"
import { getUser } from "../../utils/getUser"
import { AthleteActivities } from "../../models/activities"
import { db } from "../../firebase"
import { calculateTRIMP } from "../../utils/calculateTRIMP"

export const storeAuthSuccess = () => {
	return { type: types.STORE_STRAVA_AUTH_SUCCESS }
}

export const refreshStravaToken = (data: any) => {
	return { type: types.REFRESH_STRAVA_TOKEN, data }
}

export const copyActivitiesSuccess = () => {
	return { type: types.COPY_STRAVA_ACTVITIES }
}

export const logoutUser = () => {
	return { type: types.LOGOUT_USER }
}

export const getZones = async (accessToken: string) => {
	const response: any = await axios.get(ZONES_URL, {
		headers: { Authorization: `Bearer ${accessToken}` },
	})
	return response.data.heart_rate.zones
}

export const storeStravaAuth = (code: string, refresh?: boolean) => async (dispatch: any, getState: any) => {
	const payload = {
		client_id: CLIENT_ID,
		client_secret: CLIENT_SECRET,
		[refresh ? "refresh_token" : "code"]: code,
		grant_type: refresh ? "refresh_token" : "authorization_code",
	}
	dispatch(beginApiCall())
	try {
		const response = await axios.post(AUTH_TOKEN_BASE_URL, payload)
		const { access_token, refresh_token, expires_at } = response.data
		let { zones, sex } = getState().userData
		if (refresh) {
			dispatch(refreshStravaToken({ access_token, refresh_token, expires_at }))
		} else {
			sex = await getUser(access_token)
			zones = await getZones(access_token)
		}

		// Store the access token, refresh token, and expiration time in Firestore.
		const uId = localStorage.getItem("uId")
		if (uId) {
			const docRef = doc(db, FIREBASE_COLLECTIONS.USERS, uId)
			await setDoc(
				docRef,
				{ userId: uId, access_token, refresh_token, expires_at, stravaAccess: true, zones, sex },
				{ merge: true }
			)
			dispatch(storeAuthSuccess())
		} else {
			dispatch(apiCallError(NO_LOGGED_IN_USER))
		}
	} catch (error: any) {
		dispatch(apiCallError(APPLICATION_ERRORS.STORE_STRAVA_AUTH_ERROR))
		console.error(error.message)
	}
}

export const copyStravaActivities = (newActitivities?: AthleteActivities) => async (dispatch: any, getState: any) => {
	const { access_token, zones, sex } = getState().userData
	const initialCopy = newActitivities === undefined
	try {
		// Get the user's activities from Strava
		let data: AthleteActivities = []
		if (initialCopy) {
			const endpoint = getEndpoint(undefined, undefined)
			await getNewActivities(data, endpoint, access_token, initialCopy)
			data = calculateTRIMP(data, zones, sex)
		} else {
			data = newActitivities
		}

		// Store the activities in Firestore
		const uId = localStorage.getItem("uId")
		if (uId) {
			const batch = writeBatch(db)
			for (const activity of data) {
				const docRef = doc(db, FIREBASE_COLLECTIONS.ACTIVITIES, activity.id.toString())
				batch.set(docRef, { ...activity, userId: uId }, { merge: true })
			}
			await batch.commit()

			// Update dateOfLastBackup and firstActivityDate (if initialCopy) in the user document
			const dateOfLastBackup = new Date().toISOString()
			const userDocRef = doc(db, FIREBASE_COLLECTIONS.USERS, uId)
			if (initialCopy) {
				const firstActivityDate = data.length > 0 ? data[data.length - 1].start : dateOfLastBackup
				await setDoc(userDocRef, { dateOfLastBackup, firstActivityDate }, { merge: true })
			} else {
				await setDoc(userDocRef, { dateOfLastBackup }, { merge: true })
			}
			dispatch(copyActivitiesSuccess())
		} else {
			dispatch(apiCallError(NO_LOGGED_IN_USER))
		}
	} catch (error: any) {
		dispatch(apiCallError(APPLICATION_ERRORS.COPY_ACTIVITIES_ERROR))
		console.error(error.message)
	}
}
