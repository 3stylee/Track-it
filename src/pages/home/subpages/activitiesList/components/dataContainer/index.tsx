import React from "react"
import { StyledContainer } from "./components"
import { RouteMap } from "../routeMap"
import connect from "./connect"
import decodePolyLine from "../../../../utils/decodePolyline"
import { AnimatedSpinner } from "../../../../../../globalComponents/animatedSpinner"

export interface DataContainerProps {
	data: any
	apiCallsInProgress: number
}

export const DataContainer = ({ data, apiCallsInProgress }: DataContainerProps) => {
	return (
		<StyledContainer>
			{apiCallsInProgress > 0 ? (
				<AnimatedSpinner />
			) : (
				<div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
					{Array.isArray(data) ? (
						data.map((activity: any) => (
							<RouteMap
								polyline={decodePolyLine(activity.polyline)}
								name={activity.title}
								time={activity.time}
								distance={activity.distance}
								speed={activity.speed}
								id={activity.id}
								key={activity.id}
							/>
						))
					) : (
						<p>We are having trouble finding your data</p>
					)}
				</div>
			)}
		</StyledContainer>
	)
}

export default connect(DataContainer)
