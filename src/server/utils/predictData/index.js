const processData = require("../processData")
const tf = require("@tensorflow/tfjs")
const labelMapping = require("../../constants/label_mapping.json")

const predictData = async (data) => {
	const results = []
	const processedData = processData(data)
	const model = await tf.loadLayersModel("http:localhost:3001/model.json")

	for (let row of processedData) {
		const tensorData = tf.tensor2d([row])
		const prediction = model.predict(tensorData)
		const predictedClassIndex = prediction.argMax(1).dataSync()[0]
		results.push(labelMapping[predictedClassIndex])
	}
	return results
}

module.exports = predictData
