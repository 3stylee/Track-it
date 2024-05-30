import React from "react"
import RouteMap from "../routeMap"
import connect from "./connect"
import decodePolyLine from "../../../../utils/decodePolyline"
import { Button, Row } from "react-bootstrap"
import { AthleteActivities } from "../../models"
import { AnimatedSpinner } from "../../../../../../globalComponents/animatedSpinner"
import { NoResults } from "../noResults"
import { Container } from "./components"

export interface DataContainerProps {
	data: AthleteActivities
	apiCallsInProgress: number
	loadingMore: boolean
	hasMore: boolean
	loadMoreAthleteActivities: () => void
}

export const DataContainer = ({
	data,
	apiCallsInProgress,
	loadingMore,
	hasMore,
	loadMoreAthleteActivities,
}: DataContainerProps) => {
	if (apiCallsInProgress > 0) return <AnimatedSpinner height="95%" noMargin />
	return (
		<Container>
			{data.length > 0 ? (
				<Row sm={1} md={2} lg={3} xl={4} className="g-3 g-md-4">
					{data.map(({ polyline, title, time, distance, speed, id, predictedType }) => (
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
					))}
					<div className="d-flex justify-content-center w-100">
						{loadingMore ? (
							<AnimatedSpinner height="7rem" noMargin />
						) : (
							hasMore && (
								<Button variant="primary" className="w-25" onClick={loadMoreAthleteActivities}>
									Load More
								</Button>
							)
						)}
					</div>
				</Row>
			) : (
				<NoResults />
			)}
		</Container>
	)
}

export default connect(DataContainer)
