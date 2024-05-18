import { MODEL_SCALER_INFO } from "../../../constants/constants"
import { ACTIVITY_TYPE_MAPPING } from "../../../constants/constants"

/**
 * Processes an array of predictors and scales them into normalised predictors.
 *
 * @param {Array}data - the raw predictors to process.
 *
 * @returns {Array} the normalised predictors.
 */
const processData = (data) => {
	const processedData = data.map((row) => {
		const dateObject = new Date(row[0])
		const dayOfWeek = dateObject.getDay()
		const type = ACTIVITY_TYPE_MAPPING[row[5]]
		return scaleRow([dayOfWeek, row[1], row[2], row[3], row[4], type, row[6]])
	})
	return processedData
}

/**
 * Processes an array of raw predictors and scales them into normalised predictors.
 *
 * @param {Array}row - the raw predictors to process.
 *
 * @returns {Array} the normalised predictors.
 */
const scaleRow = (row) => {
	const scaledRow = row.map((value, index) => {
		const dataMin = MODEL_SCALER_INFO.data_min[index]
		const dataMax = MODEL_SCALER_INFO.data_max[index]
		const range = dataMax - dataMin

		// Apply Min-Max scaling
		const scaledValue = (value - dataMin) / range
		return scaledValue
	})
	return scaledRow
}

export default processData
