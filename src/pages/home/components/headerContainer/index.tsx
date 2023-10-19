import React from "react"
import { CenteredContainer, StyledLabel } from "./components"
import { getApiData } from "../../utils/getApiData"
import { API_ENDPOINTS } from "../../constants/constants"

export const HeaderContainer = ({ updateData }: any) => {
	const handleRadioChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
		updateData(await getApiData(event.target.id))
	}

	return (
		<CenteredContainer>
			<h1>Click Below To See Some Of Your Stats</h1>
			<div className="btn-group btn-group-lg pt-5" role="group" aria-label="Basic radio toggle button group">
				{API_ENDPOINTS.map((endpoint) => (
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
							{endpoint}
						</StyledLabel>
					</>
				))}
			</div>
		</CenteredContainer>
	)
}
