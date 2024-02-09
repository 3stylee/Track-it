import axios from "axios"
import { getEndpoint } from "../../../../redux/utils/getActivityDataEndpoint"
import { processAthleteActivities } from "../../../../redux/utils/processAthleteActivities"
import { LRUCache } from "lru-cache"

let cache = new LRUCache<string, any>({ max: 10, ttl: 1000 * 60 * 60 })

export const fetchEvents = async (info: any, successCallback: any, failureCallback: any) => {
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
				Authorization: `Bearer ${localStorage.getItem("access_code")}`,
			},
		})
		const data = processAthleteActivities(response.data)
		cache.set(endpoint, data)
		successCallback(data)
	} catch (error) {
		failureCallback(error)
	}
}
