import processData from "../processData"
import * as tf from "@tensorflow/tfjs"
import { ACTIVITY_LABEL_MAPPING } from "../../constants/constants"

/**
 * Feeds an array of objects representing activities through a Neural Network. Returns an array of predicted activity types (tempo, long run etc...).
 *
 * @param {Object[]} data - An array of objects, each representing an activity.
 *
 * @returns {String[]} - An array of strings, each representing a predicted activity type.
 */
export const predictData = async (data) => {
	const results = []
	const processedData = processData(data)
	const model = await tf.loadLayersModel(
		"https://raw.githubusercontent.com/3stylee/Track-it/master/src/constants/tfjs_model/model.json"
	)

	for (let i = 0; i < processedData.length; i++) {
		const row = processedData[i]
		if (data[i].type !== "Run") {
			results.push(data[i].type)
		} else {
			const tensorData = tf.tensor2d([row])
			const prediction = model.predict(tensorData)
			const predictedClassIndex = prediction.argMax(1).dataSync()[0]
			results.push(ACTIVITY_LABEL_MAPPING[predictedClassIndex])
		}
	}
	return results
}
