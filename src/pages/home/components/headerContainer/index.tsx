import React from "react"
import { CenteredContainer } from "./components"
import { DATA_TYPES } from "../../../../constants"
import { RadioButton } from "../radioButton"

export const HeaderContainer = ({ loadData }: any) => {
	const handleRadioChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
		loadData(event.target.id)
	}

	return (
		<CenteredContainer>
			<h1>Click Below To See Some Of Your Stats</h1>
			<div className="btn-group btn-group-lg pt-5" role="group" aria-label="Basic radio toggle button group">
				{Object.keys(DATA_TYPES).map((key) => (
					<RadioButton
						buttonLabel={DATA_TYPES[key as keyof typeof DATA_TYPES]}
						handleRadioChange={handleRadioChange}
						key={key}
					/>
				))}
			</div>
		</CenteredContainer>
	)
}
