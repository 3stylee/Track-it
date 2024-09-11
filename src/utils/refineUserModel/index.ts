import axios from "axios"
import { ACTIVITY_LABEL_MAPPING } from "../../constants/constants"
import { scaleRow } from "../processData"

export const refineUserModel = async (data: any, newType: string, accessToken: string) => {
	const predictors = [data.distance, data.time, data.elevation, data.speed, data.maxSpeed, data.cadence]
	const scaledPredictors = scaleRow(predictors)
	const label = ACTIVITY_LABEL_MAPPING[newType as keyof typeof ACTIVITY_LABEL_MAPPING]
	const modelData = [...scaledPredictors, label]

	try {
		await axios.post("https://activity-class-predictor-jnj8b.ondigitalocean.app/refine", modelData, {
			headers: {
				id: localStorage.getItem("uId"),
				Authorization: `Bearer ${accessToken}`,
			},
		})
	} catch (error) {
		console.error(error)
	}
}
