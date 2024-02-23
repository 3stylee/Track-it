import React from "react"
import { Handle, OffStateTextContainer, Switch, TextContainer } from "./components"

const spring = {
	type: "spring",
	stiffness: 700,
	damping: 30,
}

interface AnimatedSwitchProps {
	isOn: boolean
	onClick: () => void
	offState?: string
	onState?: string
}

export const AnimatedSwitch = ({ isOn, onClick, offState, onState }: AnimatedSwitchProps) => {
	return (
		<Switch onClick={onClick} isOn={isOn}>
			<OffStateTextContainer hidden={!isOn}>{offState}</OffStateTextContainer>
			<Handle layout transition={spring}>
				<TextContainer>{isOn ? onState : offState}</TextContainer>
			</Handle>
			<OffStateTextContainer hidden={isOn}>{onState}</OffStateTextContainer>
		</Switch>
	)
}
