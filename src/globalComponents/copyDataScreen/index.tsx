import React from "react"
import { Container } from "./components"
import downloadAnimation from "../../assets/animations/cloud-download.json"
import Lottie from "lottie-react"

export const CopyDataScreen = () => {
	return (
		<Container>
			<Lottie animationData={downloadAnimation} />
			Hang tight whilst we copy your data across from Strava. This shouldn't take more than a minute.
		</Container>
	)
}
