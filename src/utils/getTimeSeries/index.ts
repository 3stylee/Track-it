import { STREAM_RESOLUTION_FACTOR } from "../../constants/constants"

/**
 * Generates a time series array with a specific interval.
 *
 * @param {number} length - The length of the time series array to generate.
 *
 * @returns {string[]} An array of strings, which are the time intervals determined by the resolution factor constant (factor of 15 means 15s between each data point in the array). This is used to plot activity graphs.
 */
export const getTimeSeries = (length: number) => {
	const timeArray = []
	let startTime = new Date(2000, 0, 1, 0, 0)

	for (let i = 0; i < length; i++) {
		const hours = startTime.getHours().toString()
		const minutes = startTime.getMinutes().toString().padStart(2, "0")
		const seconds = startTime.getSeconds().toString().padStart(2, "0")
		if (parseInt(hours) > 0) {
			timeArray.push(`${hours}:${minutes}:${seconds}`)
		} else {
			timeArray.push(`${minutes}:${seconds}`)
		}

		startTime.setSeconds(startTime.getSeconds() + STREAM_RESOLUTION_FACTOR)
	}

	return timeArray
}
