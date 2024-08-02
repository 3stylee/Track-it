import React from "react"
import decodePolyLine from "../../../../utils/decodePolyline"
import { getMapboxEndpoint } from "../../../../utils/getMapboxEndpoint"
import { ImageContainer, RoundedImage } from "./components"
import { useTheme } from "@emotion/react"
import { BadgeDropdown } from "../../../../globalComponents/badgeDropdown"
import { ACTIVITY_TYPES } from "../../../../constants/constants"
import connect from "./connect"

interface ActivityImageProps {
	polyline: string
	predictedType: string
	id: number
	updateActivityType: (id: number, type: string, currentActivity: boolean) => void
}

const ActivityImage = ({ polyline, predictedType, id, updateActivityType }: ActivityImageProps) => {
	const theme = useTheme()
	if (polyline === undefined || polyline === "") return null
	const decodedPolyline = decodePolyLine(polyline)
	const url = getMapboxEndpoint(decodedPolyline, theme.name)

	const handleSetType = (selected: string) => {
		updateActivityType(id, selected, true)
	}

	return (
		<ImageContainer>
			<RoundedImage src={url} alt="activity map" />
			<BadgeDropdown selected={predictedType} options={ACTIVITY_TYPES} setSelected={handleSetType} />
		</ImageContainer>
	)
}

export default connect(ActivityImage)
