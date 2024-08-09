import React from "react"
import { ImageContainer, StyledImage } from "./components"

interface ActivityImageProps {
	backgroundImage: string | null
}

export const ActivityImage = ({ backgroundImage }: ActivityImageProps) => {
	if (backgroundImage === null) return null

	return (
		<ImageContainer>
			<StyledImage src={backgroundImage} alt="Activity map" />
		</ImageContainer>
	)
}
