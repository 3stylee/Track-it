import { LRUCache } from "lru-cache"
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"
import { FIREBASE_COLLECTIONS, NO_LOGGED_IN_USER } from "../../constants/constants"

let cache = new LRUCache<string, any>({ max: 10, ttl: 1000 * 60 * 60 })

/**
 * Fetches a list of athlete activities and processes it so it can be used by FullCalendar.
 * The data is cached for future use.
 *
 * @param {Object} info - An object containing the start and end dates for the data to fetch.
 * @param {Function} successCallback - A function that is called on successful fetch.
 * @param {Function} failureCallback - A function that is called with an error message on failure.
 *
 * @returns {Promise<void>} Returns a Promise that resolves when the data has been fetched and processed.
 */
export const fetchEvents = async (info: any, successCallback: any, failureCallback: any) => {
	const id = info.startStr + info.endStr
	if (cache.has(id)) {
		successCallback(cache.get(id))
		return
	}

	try {
		const uId = localStorage.getItem("uId")
		if (uId) {
			const db = getFirestore()
			const q = query(
				collection(db, FIREBASE_COLLECTIONS.ACTIVITIES),
				where("userId", "==", uId),
				where("start", ">=", info.startStr),
				where("start", "<=", info.endStr)
			)
			const querySnapshot = await getDocs(q)
			const events = querySnapshot.docs.map((doc) => doc.data())
			cache.set(id, events)
			successCallback(events)
		} else {
			failureCallback(NO_LOGGED_IN_USER)
		}
	} catch (error) {
		failureCallback(error)
	}
}
