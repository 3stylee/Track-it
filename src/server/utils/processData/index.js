const scalerInfo = require("../../constants/scaler_info.json")
const type_mapping = require("../../constants/type_mapping.json")

const processData = (data) => {
	const processedData = data.map((row) => {
		const dateObject = new Date(row[0])
		const dayOfWeek = dateObject.getDay()
		const type = type_mapping[row[5]]
		return scaleRow([dayOfWeek, row[1], row[2], row[3], row[4], type, row[6]])
	})
	return processedData
}

const scaleRow = (row) => {
	const scaledRow = row.map((value, index) => {
		const dataMin = scalerInfo.data_min_[index]
		const dataMax = scalerInfo.data_max_[index]
		const range = dataMax - dataMin

		// Apply Min-Max scaling
		const scaledValue = (value - dataMin) / range
		return scaledValue
	})
	return scaledRow
}

module.exports = processData
