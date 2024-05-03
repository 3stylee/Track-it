import React from "react"
import { Button, Modal } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import connect from "./connect"

interface LogoutProps {
	show: boolean
	handleClose: () => void
	logoutUser: () => void
}

const LogoutScreen = ({ show, handleClose, logoutUser }: LogoutProps) => {
	const navigate = useNavigate()
	return (
		<Modal show={show} onHide={handleClose} centered>
			<Modal.Header closeButton>
				<Modal.Title>Log Out</Modal.Title>
			</Modal.Header>
			<Modal.Body>Do you want to log out and revoke our access to your Strava account?</Modal.Body>
			<Modal.Footer>
				<Button
					variant="danger"
					onClick={() => {
						logoutUser()
						localStorage.clear()
						navigate("/")
					}}>
					Log out
				</Button>
				<Button variant="secondary" onClick={handleClose}>
					Cancel
				</Button>
			</Modal.Footer>
		</Modal>
	)
}

export default connect(LogoutScreen)
