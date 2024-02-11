import React from "react"
import { StyledContainer } from "./components"
import { RouteMap } from "../routeMap"
import connect from "./connect"
import decodePolyLine from "../../../../utils/decodePolyline"
import { AnimatedSpinner } from "../../../../../../globalComponents/animatedSpinner"
import { Row } from "react-bootstrap"

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
				<Row sm={2} md={2} lg={3} xl={4} className="g-4">
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
				</Row>
			)}
		</StyledContainer>
	)
}

export default connect(DataContainer)
