import { STREAM_RESOLUTION_FACTOR } from "../../../../constants/constants"

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
