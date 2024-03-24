import processData from "../processData"
import * as tf from "@tensorflow/tfjs"
import { ACTIVITY_LABEL_MAPPING } from "../../../constants/constants"

export const predictData = async (data) => {
	const results = []
	const processedData = processData(data)
	const model = await tf.loadLayersModel(
		"https://raw.githubusercontent.com/3stylee/Track-it/master/src/constants/tfjs_model/model.json"
	)

	for (let row of processedData) {
		const tensorData = tf.tensor2d([row])
		const prediction = model.predict(tensorData)
		const predictedClassIndex = prediction.argMax(1).dataSync()[0]
		results.push(ACTIVITY_LABEL_MAPPING[predictedClassIndex])
	}
	return results
}
