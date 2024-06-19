import React from "react"
import decodePolyLine from "../../../../utils/decodePolyline"
import { getMapboxEndpoint } from "../../../../utils/getMapboxEndpoint"
import { ImageContainer, RoundedImage, StyledBadge } from "./components"
import { useTheme } from "@emotion/react"

interface ActivityImageProps {
	polyline: string
	predictedType: string
}

export const ActivityImage = ({ polyline, predictedType }: ActivityImageProps) => {
	const theme = useTheme()
	if (polyline === undefined || polyline === "") return null
	const decodedPolyline = decodePolyLine(polyline)
	const url = getMapboxEndpoint(decodedPolyline, theme.name)
	return (
		<ImageContainer>
			<RoundedImage src={url} alt="activity map" />
			<StyledBadge>{predictedType}</StyledBadge>
		</ImageContainer>
	)
}
