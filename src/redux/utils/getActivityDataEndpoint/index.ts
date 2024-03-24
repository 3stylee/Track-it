import { API_BASE_URL } from "../../../constants/constants"

export const getEndpoint = (dateBefore?: number, dateAfter?: number) => {
	let endpoint = API_BASE_URL
	endpoint += "/athlete/activities"
	// The API limits the response data to 30 activities by default, and when passed as a parameter
	// it maxes out at 200. If a user has more than that over the course of a given month
	// then we will miss some activities. Unlikely to cause issues but possible
	endpoint += "?per_page=200"

	if (dateBefore) {
		endpoint += `&before=${dateBefore}`
	}

	if (dateAfter) {
		endpoint += `&after=${dateAfter}`
	}

	return endpoint
}
