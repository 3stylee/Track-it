import React from "react"
import decodePolyLine from "../../../../utils/decodePolyline"
import { getMapboxEndpoint } from "../../../../utils/getMapboxEndpoint"
import { ImageContainer, RoundedImage } from "./components"
import { useTheme } from "@emotion/react"

export const ActivityImage = ({ polyline }: any) => {
	const theme = useTheme()
	if (polyline === undefined || polyline === "") return null
	const decodedPolyline = decodePolyLine(polyline)
	const coordinatesString = decodedPolyline.map((coord: any[]) => `[${coord.join(",")}]`).join(",")
	const url = getMapboxEndpoint(coordinatesString, theme.name)
	return (
		<ImageContainer>
			<RoundedImage src={url} alt="activity map" />
		</ImageContainer>
	)
}
