import axios from "axios"
import processData from "../processData"

export const predictData = async (data, accessToken) => {
	try {
		const processedData = processData(data)
		const response = await axios.post(
			"https://activity-class-predictor-jnj8b.ondigitalocean.app/predict",
			processedData,
			{
				headers: {
					id: localStorage.getItem("uId"),
					Authorization: `Bearer ${accessToken}`,
				},
			}
		)
		return response.data
	} catch (error) {
		console.error(error)
	}
}
