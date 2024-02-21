import axios from "axios"

export const getRunTypePredictions = async (activities: any) => {
	try {
		const response = await axios.post(
			"http://localhost:3001/data",
			{
				data: activities,
			},
			{
				headers: {
					"Content-type": "application/json; charset=UTF-8",
				},
			}
		)
		return response.data
	} catch (error) {
		console.error(error)
		throw error
	}
}
