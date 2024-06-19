import React from "react"
import RouteMap from "../routeMap"
import connect from "./connect"
import decodePolyLine from "../../../../utils/decodePolyline"
import { Row } from "react-bootstrap"
import { AthleteActivities } from "../../models"
import { AnimatedSpinner } from "../../../../../../globalComponents/animatedSpinner"
import { NoResults } from "../noResults"
import { Container, LoadMoreButton, LoadMoreContainer } from "./components"
import { getDateRangeFromUrl } from "../../../../utils/getDateRangeFromUrl"
import { getBeforeAndAfterDates } from "../../../../utils/getBeforeAndAfterDates"
import { trimData } from "../../../../utils/trimData"

export interface DataContainerProps {
	athleteActivities: AthleteActivities
	apiCallsInProgress: number
	loadingMore: boolean
	hasMore: boolean
	page: number
	setPage: any
	shouldTrimData?: boolean
	loadAthleteActivities: (page: number, before?: number, after?: number) => void
}

export const DataContainer = ({
	athleteActivities,
	apiCallsInProgress,
	loadingMore,
	hasMore,
	page,
	setPage,
	shouldTrimData = true,
	loadAthleteActivities,
}: DataContainerProps) => {
	const { before, after } = getBeforeAndAfterDates(getDateRangeFromUrl())
	if (!(before || after) && shouldTrimData) athleteActivities = trimData(athleteActivities)

	if (apiCallsInProgress > 0) return <AnimatedSpinner height="95%" noMargin />
	return (
		<Container>
			{athleteActivities.length > 0 ? (
				<Row sm={1} md={2} lg={3} xl={4} className="g-3 g-md-4">
					{athleteActivities.map(({ polyline, title, time, distance, speed, id, predictedType, start }) => (
						<RouteMap
							polyline={decodePolyLine(polyline)}
							name={title}
							time={time}
							distance={distance}
							speed={speed}
							id={id}
							key={id}
							predictedType={predictedType}
							start={start}
						/>
					))}
					<LoadMoreContainer>
						{loadingMore ? (
							<AnimatedSpinner height="7rem" noMargin />
						) : (
							hasMore && (
								<LoadMoreButton
									variant="primary"
									onClick={() => {
										setPage(page + 1)
										loadAthleteActivities(page + 1, before, after)
									}}>
									Load More
								</LoadMoreButton>
							)
						)}
					</LoadMoreContainer>
				</Row>
			) : (
				<NoResults />
			)}
		</Container>
	)
}

export default connect(DataContainer)
