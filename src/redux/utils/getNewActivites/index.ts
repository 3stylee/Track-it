import axios from "axios"
import { processAthleteActivities } from "../processAthleteActivities"
import { dumbPredictData } from "../dumbPredictData"

export const getNewActivities = async (data: object[], endpoint: string, accessToken: string) => {
	let continuePagination = true
	const maxAttempts = 30 // no more than 6000 activites
	let counter = 0
	while (continuePagination && counter < maxAttempts) {
		const response = await axios.get(endpoint, {
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		})

		// feed the data to the model to get the run type predictions
		const activities: any = []
		let dataToPredict = processAthleteActivities(response.data)
		dataToPredict.forEach(({ speed, heartrate, type, distance }: any) => {
			activities.push({ average_heartrate: heartrate, average_speed: speed, type, distance })
		})
		const dumbPredictions = dumbPredictData(activities)
		dataToPredict = dataToPredict.map((activity: any, index: number) => {
			return { ...activity, predictedType: dumbPredictions[index] }
		})
		data.push(...dataToPredict)

		counter++
		if (response.data.length < 200) continuePagination = false
	}
}
