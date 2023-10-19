import React from "react"
import { StyledCard, StyledContainer } from "./components"

interface DataContainerProps {
	data: string
}

export const DataContainer = ({ data }: DataContainerProps) => {
	return (
		<StyledContainer>
			<StyledCard className="card">
				<div className="card-body">{data}</div>
			</StyledCard>
		</StyledContainer>
	)
}
