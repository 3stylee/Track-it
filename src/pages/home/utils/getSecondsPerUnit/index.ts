import { STREAM_RESOLUTION_FACTOR } from "../../../../constants/constants"

/**
 * Calculates the pace in seconds per kilometer/mile for each segment of a distance stream.
 *
 * @param {number[]} distanceStream - An array of numbers, each representing the total distance covered after each second.
 * @param {number} divisor - The divisor which determines whether the pace is in seconds per kilometer or per mile.
 *
 * @returns {number[]} An array of numbers, representing a stream of the pace over the course of the activity. This can be used to plot a pace graph.
 */
export const getSecondsPerUnit = (distanceStream: any, divisor: number) => {
	const paceList = []

	// Calculate pace for each segment
	for (let i = 1; i < distanceStream.length; i++) {
		const metersPerSecond = (distanceStream[i] - distanceStream[i - 1]) / STREAM_RESOLUTION_FACTOR

		// Calculate pace in seconds per kilometer
		const paceSecondsPerKm = divisor / metersPerSecond

		paceList.push(paceSecondsPerKm)
	}

	return paceList
}
