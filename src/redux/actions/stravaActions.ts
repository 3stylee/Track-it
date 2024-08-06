import axios from "axios"
import {
	AUTH_TOKEN_BASE_URL,
	CLIENT_ID,
	CLIENT_SECRET,
	FIREBASE_COLLECTIONS,
	NO_LOGGED_IN_USER,
} from "../../constants/constants"
import * as types from "./actionTypes"
import { apiCallError, beginApiCall } from "./apiStatusActions"
import { doc, setDoc, writeBatch } from "firebase/firestore"
import { getEndpoint } from "../../utils/getActivityDataEndpoint"
import { getNewActivities } from "../../utils/getNewActivites"
import { getUserId } from "../../utils/getUserId"
import { AthleteActivities } from "../../models/activities"
import { db } from "../../firebase"

export const storeAuthSuccess = () => {
	return { type: types.STORE_STRAVA_AUTH_SUCCESS }
}

export const refreshStravaToken = (data: any) => {
	return { type: types.REFRESH_STRAVA_TOKEN, data }
}

export const copyActivitiesSuccess = () => {
	return { type: types.COPY_STRAVA_ACTVITIES }
}

export const storeStravaAuth = (code: string, refresh?: boolean) => async (dispatch: any) => {
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
		if (refresh) dispatch(refreshStravaToken({ access_token, refresh_token, expires_at }))
		if (!refresh) await getUserId(access_token)

		// Store the access token, refresh token, and expiration time in Firestore.
		const uId = localStorage.getItem("uId")
		if (uId) {
			const docRef = doc(db, FIREBASE_COLLECTIONS.USERS, uId)
			await setDoc(docRef, { access_token, refresh_token, expires_at, stravaAccess: true }, { merge: true })
			dispatch(storeAuthSuccess())
		} else {
			dispatch(apiCallError(NO_LOGGED_IN_USER))
		}
	} catch (error: any) {
		dispatch(apiCallError(error.message))
	}
}

export const copyStravaActivities = (dateOfLastCopy: number | undefined) => async (dispatch: any, getState: any) => {
	const accessToken = getState().userData.access_token
	const endpoint = getEndpoint(undefined, dateOfLastCopy)
	const initialCopy = dateOfLastCopy === undefined
	try {
		// Get the user's activities from Strava
		let data: AthleteActivities = []
		await getNewActivities(data, endpoint, accessToken, initialCopy)

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
				const firstActivityDate = data[data.length - 1].start
				await setDoc(userDocRef, { dateOfLastBackup, firstActivityDate }, { merge: true })
			} else {
				await setDoc(userDocRef, { dateOfLastBackup }, { merge: true })
			}
			dispatch(copyActivitiesSuccess())
		} else {
			dispatch(apiCallError(NO_LOGGED_IN_USER))
		}
	} catch (error: any) {
		dispatch(apiCallError(error.message))
	}
}
