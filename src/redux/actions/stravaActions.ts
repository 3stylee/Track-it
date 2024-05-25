import axios from "axios"
import { AUTH_TOKEN_BASE_URL, CLIENT_ID, CLIENT_SECRET } from "../../constants/constants"
import * as types from "./actionTypes"
import { apiCallError, beginApiCall } from "./apiStatusActions"
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { doc, getFirestore, setDoc } from "firebase/firestore"

export const storeAuthSuccess = () => {
	return { type: types.STORE_STRAVA_AUTH_SUCCESS }
}

export const refreshStravaToken = (data: any) => {
	return { type: types.REFRESH_STRAVA_TOKEN, data }
}

export const storeStravaAuth = (code: string, refresh?: boolean) => {
	return async function (dispatch: any) {
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

			// Store the access token, refresh token, and expiration time in Firestore.
			const auth = getAuth()
			onAuthStateChanged(auth, async (user) => {
				if (user) {
					const db = getFirestore()
					const docRef = doc(db, "users", user.uid)
					await setDoc(
						docRef,
						{ access_token, refresh_token, expires_at, stravaAccess: true },
						{ merge: true }
					)
					dispatch(storeAuthSuccess())
					if (refresh) dispatch(refreshStravaToken({ access_token, refresh_token, expires_at }))
				} else {
					throw new Error("No logged in user found")
				}
			})
		} catch (error: any) {
			dispatch(apiCallError(error.message))
		}
	}
}
