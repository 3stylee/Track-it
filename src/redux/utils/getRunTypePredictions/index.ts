import { predictData } from "../predictData"

export const getRunTypePredictions = async (activities: any) => {
	try {
		const response = await predictData(activities)
		return response
	} catch (error) {
		console.error(error)
		throw error
	}
}
