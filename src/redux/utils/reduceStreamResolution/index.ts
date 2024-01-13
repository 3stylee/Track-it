import { STREAM_RESOLUTION_FACTOR } from "../../../constants"

export const reduceResolution = (apiResponse: any) => {
	for (const streamKey in apiResponse) {
		if (apiResponse.hasOwnProperty(streamKey)) {
			const stream = apiResponse[streamKey]

			if (stream.data && Array.isArray(stream.data)) {
				stream.data = stream.data.filter((_value: any, index: number) => index % STREAM_RESOLUTION_FACTOR === 0)
			}
		}
	}

	return apiResponse
}
