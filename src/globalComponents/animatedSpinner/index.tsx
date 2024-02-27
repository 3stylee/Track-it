import React from "react"
import { ProgressContainer } from "./components"
import Lottie from "lottie-react"
import loadingAnimation from "../../assets/animations/olympics.json"

export interface AnimatedSpinnerProps {
	height?: string
	noMargin?: boolean
}

export const AnimatedSpinner = ({ height, noMargin = false }: AnimatedSpinnerProps) => {
	return (
		<ProgressContainer height={height} noMargin={noMargin}>
			<Lottie animationData={loadingAnimation} />
		</ProgressContainer>
	)
}
