import React from "react"
import RouteMap from "../routeMap"
import connect from "./connect"
import decodePolyLine from "../../../../utils/decodePolyline"
import { Col, Row } from "react-bootstrap"
import { AnimatedSpinner } from "../../../../globalComponents/animatedSpinner"
import { NoResults } from "../noResults"
import { Container } from "./components"
import { getDateRangeFromUrl } from "../../../../utils/getDateRangeFromUrl"
import { getBeforeAndAfterDates } from "../../../../utils/getBeforeAndAfterDates"
import { trimData } from "../../../../utils/trimData"
import { AthleteActivities, LoadAthleteActivities } from "../../../../models/activities"
import { useInfiniteScroll } from "./infiniteScroll"

export interface DataContainerProps {
	athleteActivities: AthleteActivities
	apiCallsInProgress: number
	loadingMore: boolean
	hasMore: boolean
	shouldTrimData?: boolean
	nextPage: () => void
	loadAthleteActivities: LoadAthleteActivities
	beginLoadMoreApiCall: () => void
}

export const DataContainer = ({
	athleteActivities,
	apiCallsInProgress,
	loadingMore,
	hasMore,
	shouldTrimData = true,
	nextPage,
	loadAthleteActivities,
	beginLoadMoreApiCall,
}: DataContainerProps) => {
	const { before, after } = getBeforeAndAfterDates(getDateRangeFromUrl())
	if (!(before || after) && shouldTrimData) athleteActivities = trimData(athleteActivities)

	const scrollDown = () => {
		if (loadingMore) return
		beginLoadMoreApiCall()
		setTimeout(() => {
			nextPage()
			loadAthleteActivities(before, after)
		}, 100)
	}
	const { bottomRef } = useInfiniteScroll(scrollDown, before, after)

	if (apiCallsInProgress > 0) return <AnimatedSpinner height="95%" noMargin />
	return (
		<Container>
			{athleteActivities.length > 0 ? (
				<>
					<Row sm={1} md={2} lg={3} xl={4} className="g-3 g-md-4">
						{athleteActivities.map(
							({ polyline, title, time, distance, speed, id, predictedType, start }, index) => (
								<Col
									key={id}
									ref={index + 1 === athleteActivities.length && hasMore ? bottomRef : null}>
									<RouteMap
										polyline={decodePolyLine(polyline)}
										name={title}
										time={time}
										distance={distance}
										speed={speed}
										id={id}
										predictedType={predictedType}
										start={start}
									/>
								</Col>
							)
						)}
					</Row>
					{loadingMore && <AnimatedSpinner height="10rem" noMargin />}
				</>
			) : (
				<NoResults />
			)}
		</Container>
	)
}

export default connect(DataContainer)
