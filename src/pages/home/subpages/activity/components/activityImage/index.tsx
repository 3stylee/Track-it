import React from "react"
import decodePolyLine from "../../../../utils/decodePolyline"
import { getMapboxEndpoint } from "../../../../utils/getMapboxEndpoint"
import { RoundedImage } from "./components"

export const ActivityImage = ({ polyline }: any) => {
	if (polyline === undefined) return null
	const decodedPolyline = decodePolyLine(polyline)
	const coordinatesString = decodedPolyline.map((coord: any[]) => `[${coord.join(",")}]`).join(",")
	const url = getMapboxEndpoint(coordinatesString)
	return (
		<div>
			<RoundedImage src={url} alt="activity map" />
		</div>
	)
}
