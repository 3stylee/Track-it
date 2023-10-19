import axios from "axios"
import { API_BASE_URL } from "../../constants/constants"

export const getApiData = async (type: string) => {
	let data = ""
	let endpoint = API_BASE_URL

	switch (type) {
		case "activities":
			endpoint += "/athlete/activities"
			break
		case "athlete":
			endpoint += "/athlete"
			break
		case "bonus":
			endpoint += ""
			break
	}

	try {
		const response = await axios.get(endpoint, {
			headers: {
				Authorization: `Bearer ${localStorage.getItem("access_code")}`,
			},
		})
		data = response.data
		console.log(data)
	} catch (error) {
		throw error
	}

	return JSON.stringify(data)
}
