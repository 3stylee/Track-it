import React, { useState } from "react"
import { Button, Modal } from "react-bootstrap"
import connect from "./connect"
import { Units } from "../../models/state"
import { AnimatedSwitch } from "../animatedSwitch"
import { SettingContainer, StyledModal } from "./components"
import { useTheme } from "@emotion/react"
import { LogoutScreen } from "../logoutScreen"
interface SettingsProps {
	show: boolean
	units: Units
	setUnitImperial: () => void
	setUnitMetric: () => void
	handleClose: () => void
	logoutUser: () => void
}

const SettingsMenu = ({ show, units, setUnitImperial, setUnitMetric, handleClose, logoutUser }: SettingsProps) => {
	const theme = useTheme()
	const [showLogout, setShowLogout] = useState(false)
	return (
		<>
			<StyledModal show={show} onHide={handleClose} centered data-bs-theme={theme.bootstrap.background}>
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
					<SettingContainer>
						Log Out:
						<Button variant="danger" onClick={() => setShowLogout(!showLogout)}>
							Log Out
						</Button>
					</SettingContainer>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
				</Modal.Footer>
			</StyledModal>
			<LogoutScreen
				show={showLogout}
				logoutUser={logoutUser}
				handleClose={() => {
					setShowLogout(false)
				}}
			/>
		</>
	)
}

export default connect(SettingsMenu)
