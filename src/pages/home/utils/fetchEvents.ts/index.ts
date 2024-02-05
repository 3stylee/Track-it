import axios from "axios"
import { getEndpoint } from "../../../../redux/utils/getActivityDataEndpoint"
import { processAthleteActivities } from "../../../../redux/utils/processAthleteActivities"

export const fetchEvents = async (info: any, successCallback: any, failureCallback: any) => {
	const today = new Date()
	today.setHours(0, 0, 0, 0)
	if (info.start > today) {
		failureCallback("You can only view past activities")
		return
	}

	const endpoint = getEndpoint(info.end.getTime() / 1000, info.start.getTime() / 1000)
	try {
		const response = await axios.get(endpoint, {
			headers: {
				Authorization: `Bearer ${localStorage.getItem("access_code")}`,
			},
		})
		// For some reason the API gives data from oldest to newest, we want the opposite
		const data = processAthleteActivities(response.data)
		successCallback(data)
	} catch (error) {
		failureCallback(error)
	}
}
