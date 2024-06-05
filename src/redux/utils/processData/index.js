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
		const dateObject = new Date(row.start_date)
		const dayOfWeek = dateObject.getDay()
		const type = ACTIVITY_TYPE_MAPPING[row.type]
		return scaleRow([
			dayOfWeek,
			row.moving_time,
			row.distance,
			row.average_speed,
			row.total_elevation_gain,
			type,
			row.average_heartrate,
		])
	})
	console.log(processedData)
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
