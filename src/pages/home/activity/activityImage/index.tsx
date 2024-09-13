import React from "react"
import { StyledImage } from "./components"
import { useTheme } from "@emotion/react"
import { THEMES } from "../../../../constants/constants"

interface ActivityImageProps {
	backgroundImage: string | null
}

export const ActivityImage = ({ backgroundImage }: ActivityImageProps) => {
	const theme = useTheme()
	const placeholder =
		theme.name === THEMES.DARK
			? require("../../../../assets/images/tile_background_dark.png")
			: require("../../../../assets/images/tile_background_light.png")

	return (
		<div>
			<StyledImage src={backgroundImage ? backgroundImage : placeholder} alt="Activity map" />
		</div>
	)
}
