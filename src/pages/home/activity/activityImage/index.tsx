import React from "react"
import { StyledImage } from "./components"

interface ActivityImageProps {
	backgroundImage: string | null
}

export const ActivityImage = ({ backgroundImage }: ActivityImageProps) => {
	if (backgroundImage === null) return null

	return (
		<div>
			<StyledImage src={backgroundImage} alt="Activity map" />
		</div>
	)
}
