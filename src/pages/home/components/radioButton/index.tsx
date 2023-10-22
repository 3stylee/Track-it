import React from "react"
import { StyledLabel } from "./components"

export interface RadioButtonProps {
	endpoint: string
	handleRadioChange: any
}

export const RadioButton = ({ endpoint, handleRadioChange }: RadioButtonProps) => {
	return (
		<>
			<input
				type="radio"
				className="btn-check"
				name="btnradio"
				id={endpoint}
				autoComplete="off"
				onChange={handleRadioChange}
			/>
			<StyledLabel className="btn btn-outline-dark" htmlFor={endpoint}>
				{endpoint.charAt(0).toUpperCase() + endpoint.slice(1)}
			</StyledLabel>
		</>
	)
}
