import polyline from "@mapbox/polyline"

/**
 * Decodes a polyline string and flips the latitude and longitude.
 *
 * @param {string} pLine - The polyline string to decode.
 * @returns {Array<Array<number>>} The decoded polyline, with latitude and longitude flipped.
 */
const decodePolyLine = (pLine: string) => {
	const decoded = polyline.decode(pLine)
	const flipLatLong = decoded.map(([lat, long]) => [long, lat])
	return flipLatLong
}

export default decodePolyLine
