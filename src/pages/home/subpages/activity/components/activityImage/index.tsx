import React from "react"
import decodePolyLine from "../../../../utils/decodePolyline"
import { getMapboxEndpoint } from "../../../../utils/getMapboxEndpoint"

export const ActivityImage = ({ polyline }: any) => {
	if (polyline === undefined) return null
	const decodedPolyline = decodePolyLine(polyline)
	const coordinatesString = decodedPolyline.map((coord: any[]) => `[${coord.join(",")}]`).join(",")
	const url = getMapboxEndpoint(coordinatesString)
	return (
		<div>
			<img src={url} alt="placehold" />
		</div>
	)
}
