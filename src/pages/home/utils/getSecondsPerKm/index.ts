import { STREAM_RESOLUTION_FACTOR } from "../../../../constants"

export const getSecondsPerKm = (distanceStream: any) => {
	const paceList = []

	// Calculate pace for each segment
	for (let i = 1; i < distanceStream.length; i++) {
		const metersPerSecond = (distanceStream[i] - distanceStream[i - 1]) / STREAM_RESOLUTION_FACTOR

		// Calculate pace in seconds per kilometer
		const paceSecondsPerKm = 1000 / metersPerSecond

		paceList.push(paceSecondsPerKm)
	}

	return paceList
}
