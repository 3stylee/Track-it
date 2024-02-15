import { useTheme } from "@emotion/react"
import React from "react"
import { Button, Modal } from "react-bootstrap"
import { THEMES } from "../../constants"
import connect from "./connect"
import { Units } from "../../config/models"

interface SettingsProps {
	show: boolean
	units: Units
	setUnitImperial: () => void
	setUnitMetric: () => void
	handleClose: () => void
	toggleTheme: () => void
}

const SettingsMenu = ({ show, units, setUnitImperial, setUnitMetric, handleClose, toggleTheme }: SettingsProps) => {
	const theme = useTheme()
	return (
		<Modal show={show} onHide={handleClose} centered>
			<Modal.Header closeButton>
				<Modal.Title>Settings</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				Dark Mode:
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
				Normal units of measurement:
				<div className="form-check form-switch">
					<input
						className="form-check-input"
						type="checkbox"
						role="switch"
						id="flexSwitchCheckChecked"
						onChange={() => {
							units.unitString === "km" ? setUnitImperial() : setUnitMetric()
						}}
						checked={units.meters === 1000}
					/>
				</div>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" onClick={handleClose}>
					Close
				</Button>
			</Modal.Footer>
		</Modal>
	)
}

export default connect(SettingsMenu)
