import React, { useContext } from "react"
import decodePolyLine from "../../../../utils/decodePolyline"
import { getMapboxEndpoint } from "../../../../utils/getMapboxEndpoint"
import { ImageContainer, RoundedImage } from "./components"
import ThemeContext from "../../../../../../theme/themeContext"

export const ActivityImage = ({ polyline }: any) => {
	const { theme } = useContext(ThemeContext)
	if (polyline === undefined || polyline === "") return null
	const decodedPolyline = decodePolyLine(polyline)
	const coordinatesString = decodedPolyline.map((coord: any[]) => `[${coord.join(",")}]`).join(",")
	const url = getMapboxEndpoint(coordinatesString, theme)
	return (
		<ImageContainer>
			<RoundedImage src={url} alt="activity map" />
		</ImageContainer>
	)
}
