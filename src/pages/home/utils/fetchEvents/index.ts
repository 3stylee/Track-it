import axios from "axios"
import { getEndpoint } from "../../../../redux/utils/getActivityDataEndpoint"
import { processAthleteActivities } from "../../../../redux/utils/processAthleteActivities"
import { LRUCache } from "lru-cache"

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
export const fetchEvents = async (info: any, accessToken: any, successCallback: any, failureCallback: any) => {
	const today = new Date()
	today.setHours(0, 0, 0, 0)
	if (info.start > today) {
		failureCallback("You can only view past activities")
		return
	}

	const endpoint = getEndpoint(info.end.getTime() / 1000, info.start.getTime() / 1000)

	if (cache.has(endpoint)) {
		successCallback(cache.get(endpoint))
		return
	}

	try {
		const response = await axios.get(endpoint, {
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		})
		const data = processAthleteActivities(response.data)
		cache.set(endpoint, data)
		successCallback(data)
	} catch (error) {
		failureCallback(error)
	}
}
