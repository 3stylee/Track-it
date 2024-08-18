import React from "react"
import { Button, Modal } from "react-bootstrap"
import { privacyPolicyText } from "../../constants/privacyPolicy"
import { Container, ThemedModal } from "./components"
import { useTheme } from "@emotion/react"

const PrivacyPolicyModal = ({ show, handleClose }: any) => {
	const theme = useTheme()
	return (
		<ThemedModal size="lg" show={show} onHide={handleClose} data-bs-theme={theme.name}>
			<Modal.Header closeButton>
				<Modal.Title>Privacy Policy</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Container>
					<pre>{privacyPolicyText}</pre>
				</Container>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" onClick={handleClose}>
					Close
				</Button>
			</Modal.Footer>
		</ThemedModal>
	)
}

export default PrivacyPolicyModal
