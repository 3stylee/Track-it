import React from "react"
import { CenteredContainer } from "./components"
import { DATA_TYPES, INITIAL_DATA_MESSAGE } from "../../../../constants"
import { RadioButton } from "../radioButton"
import connect from "./connect"

export const HeaderContainer = ({ loadData, updateActivityType, data }: any) => {
	const handleRadioChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
		if (data.text === INITIAL_DATA_MESSAGE) {
			loadData(event.target.id)
		} else {
			updateActivityType(event.target.id)
		}
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

export default connect(HeaderContainer)
