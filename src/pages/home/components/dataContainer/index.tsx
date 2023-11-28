import React from "react"
import { ProgressContainer, StyledCard, StyledContainer } from "./components"
import processActivityData from "../../utils/processActivityData"
import processAthleteData from "../../utils/processAthleteData"
import { RouteMap } from "../routeMap"
import { DATA_TYPES } from "../../../../constants"
import connect from "./connect"
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
						<div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
							{dataType === DATA_TYPES.ACTIVITIES ? (
								data.map((activity: any) => (
									<RouteMap
										/*polyline={decodePolyLine(activity.polyline) } */ name={activity.name}
										distance={activity.distance}
										key={activity.id}
									/>
								))
							) : (
								<>{JSON.stringify(data)}</>
							)}
						</div>
					</div>
				)}
			</StyledCard>
		</StyledContainer>
	)
}

export default connect(DataContainer)
