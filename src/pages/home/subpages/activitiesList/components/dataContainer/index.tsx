import React from "react"
import { StyledContainer } from "./components"
import RouteMap from "../routeMap"
import connect from "./connect"
import decodePolyLine from "../../../../utils/decodePolyline"
import { Row } from "react-bootstrap"
import { AthleteActivities } from "../../models"

export interface DataContainerProps {
	data: AthleteActivities
}

export const DataContainer = ({ data }: DataContainerProps) => {
	return (
		<StyledContainer>
			<Row sm={1} md={2} lg={3} xl={4} className="g-4">
				{data.length > 0 ? (
					data.map(({ polyline, title, time, distance, speed, id, predictedType }) => (
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
		</StyledContainer>
	)
}

export default connect(DataContainer)
