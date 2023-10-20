import React from "react"
import { CenteredContainer, StyledLabel } from "./components"
import { API_ENDPOINTS } from "../../../../constants"

export const HeaderContainer = ({ loadData }: any) => {
	const handleRadioChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
		loadData(event.target.id)
	}

	return (
		<CenteredContainer>
			<h1>Click Below To See Some Of Your Stats</h1>
			<div className="btn-group btn-group-lg pt-5" role="group" aria-label="Basic radio toggle button group">
				{API_ENDPOINTS.map((endpoint) => (
					<div key={endpoint}>
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
					</div>
				))}
			</div>
		</CenteredContainer>
	)
}
