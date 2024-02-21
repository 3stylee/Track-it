import React from "react"
import { StyledContainer } from "./components"
import RouteMap from "../routeMap"
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
				<Row sm={1} md={2} lg={3} xl={4} className="g-4">
					{Array.isArray(data) ? (
						data.map(({ polyline, title, time, distance, speed, id, predictedType }: any) => (
							<RouteMap
								polyline={decodePolyLine(polyline)}
								name={title}
								time={time}
								distance={distance}
								speed={speed}
								id={id}
								key={id}
								predictedType={predictedType}
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
