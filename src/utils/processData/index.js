import { MODEL_SCALER_INFO } from "../../constants/constants"

/**
 * Processes an array of predictors and scales them into normalised predictors.
 *
 * @param {Array}data - the raw predictors to process.
 *
 * @returns {Array} the normalised predictors.
 */
const processData = (data) => {
	const processedData = data.map((row) => {
		const weights = scaleRow([
			row.distance,
			row.moving_time,
			row.total_elevation_gain,
			row.average_speed,
			row.max_speed,
			row.average_cadence,
		])
		return [...weights, row.type]
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
