import axios from "axios"
import { USER_DATA_URL } from "../../constants/constants"

export const getUser = async (access_token: string) => {
	const endpoint = USER_DATA_URL
	try {
		const response = await axios.get(endpoint, {
			headers: {
				Authorization: `Bearer ${access_token}`,
			},
		})
		localStorage.setItem("uId", response.data.id)
		return response.data.sex
	} catch (error) {
		console.error(error)
	}
}
