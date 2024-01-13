import { STREAM_RESOLUTION_FACTOR } from "../../../../constants"

export const getTimeSeries = (length: number) => {
	const timeArray = []
	let startTime = new Date(2000, 0, 1, 0, 0)

	for (let i = 0; i < length; i++) {
		const hours = startTime.getHours().toString().padStart(2, "0")
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
