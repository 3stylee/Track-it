import polyline from "@mapbox/polyline"

const decodePolyLine = (pLine: string) => {
	const decoded = polyline.decode(pLine)
	const flipLatLong = decoded.map(([lat, long]) => [long, lat])
	return flipLatLong
}

export default decodePolyLine
