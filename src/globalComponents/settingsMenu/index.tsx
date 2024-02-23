import React from "react"
import { Button, Modal } from "react-bootstrap"
import connect from "./connect"
import { Units } from "../../config/models"
import { AnimatedSwitch } from "../animatedSwitch"
import { SettingContainer } from "./components"
interface SettingsProps {
	show: boolean
	units: Units
	setUnitImperial: () => void
	setUnitMetric: () => void
	handleClose: () => void
}

const SettingsMenu = ({ show, units, setUnitImperial, setUnitMetric, handleClose }: SettingsProps) => {
	return (
		<Modal show={show} onHide={handleClose} centered>
			<Modal.Header closeButton>
				<Modal.Title>Settings</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<SettingContainer>
					Units of Measurement:
					<AnimatedSwitch
						isOn={units.unitString === "km"}
						onClick={() => {
							units.unitString === "km" ? setUnitImperial() : setUnitMetric()
						}}
						offState="MI"
						onState="KM"
					/>
				</SettingContainer>
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
