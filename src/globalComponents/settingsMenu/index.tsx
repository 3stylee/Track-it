import { useTheme } from "@emotion/react"
import React from "react"
import { Button, Modal } from "react-bootstrap"
import { THEMES } from "../../constants"

interface SettingsProps {
	show: boolean
	handleClose: () => void
	toggleTheme: () => void
}

export const SettingsMenu = ({ show, handleClose, toggleTheme }: SettingsProps) => {
	const theme = useTheme()
	return (
		<Modal show={show} onHide={handleClose} centered>
			<Modal.Header closeButton>
				<Modal.Title>Settings</Modal.Title>
			</Modal.Header>
			<Modal.Body>Dark Mode:</Modal.Body>
			<div className="form-check form-switch">
				<input
					className="form-check-input"
					type="checkbox"
					role="switch"
					id="flexSwitchCheckChecked"
					onChange={toggleTheme}
					checked={theme.name === THEMES.DARK}
				/>
			</div>
			<Modal.Footer>
				<Button variant="secondary" onClick={handleClose}>
					Close
				</Button>
			</Modal.Footer>
		</Modal>
	)
}
