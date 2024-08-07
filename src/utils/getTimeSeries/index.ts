import { STREAM_RESOLUTION_FACTOR } from "../../constants/constants"

/**
 * Generates a time series array with a specific interval.
 *
 * @param {number} length - The length of the time series array to generate.
 *
 * @returns {string[]} An array of strings, which are the time intervals determined by the resolution factor constant (factor of 15 means 15s between each data point in the array). This is used to plot activity graphs.
 */
export const getTimeSeries = (length: number) => {
	const timeArray: string[] = []
	// some arbitrary start time
	let startTime = new Date(2000, 0, 1, 0, 0)

	// Javascript is a weird language and can't handle floating point numbers well
	const wholeLength = Math.floor(length)
	const difference = length - wholeLength
	const fractionalPart = Math.round(difference * 100) / 100

	for (let i = 0; i < wholeLength + 1; i++) {
		pushTimeString(startTime, timeArray)
		startTime.setSeconds(startTime.getSeconds() + STREAM_RESOLUTION_FACTOR)
	}

	if (fractionalPart > 0) {
		// Round down to match elapsed_time field in API response
		const additionalSeconds = Math.floor(fractionalPart * STREAM_RESOLUTION_FACTOR)
		startTime.setSeconds(startTime.getSeconds() - (STREAM_RESOLUTION_FACTOR - additionalSeconds))
		pushTimeString(startTime, timeArray)
	}

	return timeArray
}

const pushTimeString = (startTime: Date, timeArray: string[]) => {
	const hours = startTime.getHours().toString()
	const minutes = startTime.getMinutes().toString().padStart(2, "0")
	const seconds = startTime.getSeconds().toString().padStart(2, "0")
	if (parseInt(hours) > 0) {
		timeArray.push(`${hours}:${minutes}:${seconds}`)
	} else {
		timeArray.push(`${minutes}:${seconds}`)
	}
}
