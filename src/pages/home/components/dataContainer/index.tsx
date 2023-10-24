import React from "react"
import { ProgressContainer, StyledCard, StyledContainer } from "./components"
import processActivityData from "../../utils/processActivityData"
import processAthleteData from "../../utils/processAthleteData"
import { RouteMap } from "../routeMap.tsx"
import { DATA_TYPES } from "../../../../constants"
//import decodePolyLine from "../../utils/decodePolyline"

export interface DataContainerProps {
	data: any
	dataType: string
	apiCallsInProgress: number
}

export const DataContainer = ({ data, dataType, apiCallsInProgress }: DataContainerProps) => {
	switch (dataType) {
		case "activities":
			data = processActivityData(data)
			break
		case "athlete":
			data = processAthleteData(data)
			break
		default:
			break
	}

	return (
		<StyledContainer>
			<StyledCard className="card">
				{apiCallsInProgress > 0 ? (
					<ProgressContainer>
						<div className="spinner-border" />
					</ProgressContainer>
				) : (
					<div className="card-body">
						{dataType === DATA_TYPES.ACTIVITIES ? (
							data.map((activity: any) => (
								<RouteMap /*polyline={decodePolyLine(activity.polyline) } */ key={activity.id} />
							))
						) : (
							<>{JSON.stringify(data)}</>
						)}
					</div>
				)}
			</StyledCard>
		</StyledContainer>
	)
}
