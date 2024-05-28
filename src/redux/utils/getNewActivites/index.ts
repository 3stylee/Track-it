import axios from "axios"
import { processAthleteActivities } from "../processAthleteActivities"
import { dumbPredictData } from "../dumbPredictData"

export const getNewActivities = async (data: object[], endpoint: string, accessToken: string) => {
	let continuePagination = true
	const maxAttempts = 30 // no more than 6000 activites
	let counter = 0
	while (continuePagination && counter < maxAttempts) {
		const response = await axios.get(endpoint + `&page=${counter + 1}`, {
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		})

		// feed the data to the model to get the run type predictions
		let dumbPredictions = dumbPredictData(response.data)
		data.push(...processAthleteActivities(response.data, dumbPredictions))

		counter++
		if (response.data.length < 200) continuePagination = false
	}
}
