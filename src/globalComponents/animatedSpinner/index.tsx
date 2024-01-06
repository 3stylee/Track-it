import React from "react"
import { ProgressContainer } from "./components"
import Lottie from "lottie-react"
import loadingAnimation from "../../animations/olympics.json"

export const AnimatedSpinner = () => {
	return (
		<ProgressContainer>
			<Lottie animationData={loadingAnimation} />
		</ProgressContainer>
	)
}
