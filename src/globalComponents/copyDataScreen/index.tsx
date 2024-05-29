import React from "react"
import { Container } from "./components"
import Lottie from "lottie-react"
import downloadAnimation from "../../assets/animations/cloud-download.json"

export const CopyDataScreen = () => {
	return (
		<Container>
			<Lottie animationData={downloadAnimation} />
			Hang tight whilst we opy your data across from Strava. This shouldn't take more than a minute.
		</Container>
	)
}
