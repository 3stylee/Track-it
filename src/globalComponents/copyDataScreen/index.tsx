import React, { useEffect, useState } from "react"
import { Container, Progress, StyledAlert, StyledButton } from "./components"
import { ArrowRight, Cpu } from "react-feather"
import PrivacyPolicyModal from "../privacyPolicyModal"

export const CopyDataScreen = () => {
	const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false)
	const [progress, setProgress] = useState(0)

	useEffect(() => {
		let currentProgress = 0
		const interval = setInterval(() => {
			if (currentProgress < 99.9) {
				currentProgress += (100 - currentProgress) / (50 + Math.random() * 50)
				setProgress(currentProgress)
			} else {
				clearInterval(interval)
			}
		}, 100) // Update every second

		return () => clearInterval(interval)
	}, [])
	return (
		<Container>
			<Cpu size={64} />
			<h3>Analysing your data with AI</h3>
			<Progress animated now={progress} />
			<span>This shouldn't take more than a minute</span>
			<StyledButton className="px-3" onClick={() => setShowPrivacyPolicy(true)}>
				See how we collect and use your data <ArrowRight size={18} />
			</StyledButton>
			<StyledAlert variant="danger">
				Note: Please do not refresh or go back, or your data will be lost
			</StyledAlert>
			<PrivacyPolicyModal show={showPrivacyPolicy} handleClose={() => setShowPrivacyPolicy(false)} />
		</Container>
	)
}
