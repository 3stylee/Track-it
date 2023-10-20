import React from "react"
import { ProgressContainer, StyledCard, StyledContainer } from "./components"

export interface DataContainerProps {
	data: string
	apiCallsInProgress: number
}

export const DataContainer = ({ data, apiCallsInProgress }: DataContainerProps) => {
	return (
		<StyledContainer>
			<StyledCard className="card">
				{apiCallsInProgress > 0 ? (
					<ProgressContainer>
						<div className="spinner-border" />
					</ProgressContainer>
				) : (
					<div className="card-body">{data}</div>
				)}
			</StyledCard>
		</StyledContainer>
	)
}
