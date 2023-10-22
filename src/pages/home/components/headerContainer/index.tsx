import React from "react"
import { CenteredContainer } from "./components"
import { API_ENDPOINTS } from "../../../../constants"
import { RadioButton } from "../radioButton"

export const HeaderContainer = ({ loadData }: any) => {
	const handleRadioChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
		loadData(event.target.id)
	}

	return (
		<CenteredContainer>
			<h1>Click Below To See Some Of Your Stats</h1>
			<div className="btn-group btn-group-lg pt-5" role="group" aria-label="Basic radio toggle button group">
				{API_ENDPOINTS.map((endpoint) => (
					<RadioButton endpoint={endpoint} handleRadioChange={handleRadioChange} key={endpoint} />
				))}
			</div>
		</CenteredContainer>
	)
}
