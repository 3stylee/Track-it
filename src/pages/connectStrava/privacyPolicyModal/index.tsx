import React from "react"
import { Button, Modal } from "react-bootstrap"
import { privacyPolicyText } from "../../../constants/privacyPolicy"
import { Container } from "./components"

const PrivacyPolicyModal = ({ show, handleClose }: any) => {
	return (
		<Modal size="lg" show={show} onHide={handleClose}>
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
		</Modal>
	)
}

export default PrivacyPolicyModal
