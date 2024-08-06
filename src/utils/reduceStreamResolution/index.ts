import { STREAM_RESOLUTION_FACTOR } from "../../constants/constants"

/**
 * Reduces the resolution of the data streams in an API response.
 *
 * @param {Object} apiResponse - An object representing the API response. The object contains streams for each data type, such as time, distance, and heart rate.
 *
 * @returns {Object} The API response object with the resolution of the data streams reduced.
 */
export const reduceResolution = (apiResponse: any) => {
	for (const streamKey in apiResponse) {
		if (apiResponse.hasOwnProperty(streamKey)) {
			const stream = apiResponse[streamKey]

			if (stream.data && Array.isArray(stream.data)) {
				stream.data = stream.data.filter(
					(_value: any, index: number) =>
						index % STREAM_RESOLUTION_FACTOR === 0 || index === stream.data.length - 1
				)
			}
		}
	}

	return apiResponse
}
