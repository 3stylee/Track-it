import React from "react"
import { StyledLabel } from "./components"

export interface RadioButtonProps {
	buttonLabel: string
	handleRadioChange: any
}

export const RadioButton = ({ buttonLabel, handleRadioChange }: RadioButtonProps) => {
	return (
		<>
			<input
				type="radio"
				className="btn-check"
				name="btnradio"
				id={buttonLabel}
				autoComplete="off"
				onChange={handleRadioChange}
			/>
			<StyledLabel className="btn btn-outline-dark" htmlFor={buttonLabel}>
				{buttonLabel.charAt(0).toUpperCase() + buttonLabel.slice(1)}
			</StyledLabel>
		</>
	)
}
