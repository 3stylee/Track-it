import React from "react"
import { Toast as BoostrapToast } from "react-bootstrap"
import { StyledToast, StyledToastContainer } from "./components"

interface ToastProps {
	message: string
	showToast: boolean
	setShowToast: (showToast: boolean) => void
}

export const Toast = ({ message, showToast, setShowToast }: ToastProps) => {
	return (
		<StyledToastContainer position="bottom-end">
			<StyledToast onClose={() => setShowToast(false)} show={showToast} delay={2000} autohide>
				<BoostrapToast.Body>{message}</BoostrapToast.Body>
			</StyledToast>
		</StyledToastContainer>
	)
}
