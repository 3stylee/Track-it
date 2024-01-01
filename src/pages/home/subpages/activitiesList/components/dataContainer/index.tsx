import React from "react"
import { StyledCard, StyledContainer } from "./components"
import processActivityData from "../../../../utils/processActivityData"
import { RouteMap } from "../routeMap"
import connect from "./connect"
import { ProgressContainer } from "../../../../../../globalComponents/progressContainer/components"
import decodePolyLine from "../../../../utils/decodePolyline"
import Lottie from "lottie-react"
import loadingAnimation from "../../../../../../animations/olympics.json"

export interface DataContainerProps {
	data: any
	apiCallsInProgress: number
}

export const DataContainer = ({ data, apiCallsInProgress }: DataContainerProps) => {
	let processedData
	if (Array.isArray(data)) {
		processedData = processActivityData(data)
	}

	return (
		<StyledContainer>
			<StyledCard className="card">
				{apiCallsInProgress > 0 ? (
					<ProgressContainer>
						<Lottie animationData={loadingAnimation} />
					</ProgressContainer>
				) : (
					<div className="card-body">
						<div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
							{processedData ? (
								processedData.map((activity: any) => (
									<RouteMap
										polyline={decodePolyLine(activity.polyline)}
										name={activity.name}
										distance={activity.distance}
										key={activity.id}
									/>
								))
							) : (
								<p>We are having trouble finding your data</p>
							)}
						</div>
					</div>
				)}
			</StyledCard>
		</StyledContainer>
	)
}

export default connect(DataContainer)
