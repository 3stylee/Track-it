import React from "react"
import { Container } from "./components"
import Lottie from "lottie-react"
import downloadAnimation from "../../assets/animations/cloud-download.json"

export const CopyDataScreen = () => {
	return (
		<Container>
			<Lottie animationData={downloadAnimation} />
			Copying your data across from Strava...
		</Container>
	)
}
