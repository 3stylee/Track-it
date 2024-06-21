import axios from "axios"
import { USER_DATA_URL } from "../../constants/constants"

export const getUserId = async (access_token: string) => {
	const endpoint = USER_DATA_URL
	try {
		const response = await axios.get(endpoint, {
			headers: {
				Authorization: `Bearer ${access_token}`,
			},
		})
		localStorage.setItem("uId", response.data.id)
	} catch (error) {
		console.error(error)
	}
}
