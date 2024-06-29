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
import { MAX_PAGES } from "../../../../constants/constants"
import { useInfiniteScroll } from "./infiniteScroll"

export interface DataContainerProps {
	athleteActivities: AthleteActivities
	apiCallsInProgress: number
	loadingMore: boolean
	hasMore: boolean
	nextPage: any
	prevPage: any
	page: number
	shouldTrimData?: boolean
	loadAthleteActivities: LoadAthleteActivities
}

export const DataContainer = ({
	athleteActivities,
	apiCallsInProgress,
	loadingMore,
	hasMore,
	nextPage,
	prevPage,
	page,
	shouldTrimData = true,
	loadAthleteActivities,
}: DataContainerProps) => {
	const { before, after } = getBeforeAndAfterDates(getDateRangeFromUrl())
	if (!(before || after) && shouldTrimData) athleteActivities = trimData(athleteActivities)

	const scrollUp = () => {
		if (!loadingMore) {
			prevPage()
			loadAthleteActivities(before, after, true)
		}
	}
	const scrollDown = () => {
		if (!loadingMore) {
			nextPage()
			loadAthleteActivities(before, after)
		}
	}
	const { topRef, bottomRef } = useInfiniteScroll(scrollUp, scrollDown, before, after)

	if (apiCallsInProgress > 0) return <AnimatedSpinner height="95%" noMargin />
	return (
		<Container>
			{athleteActivities.length > 0 ? (
				<>
					{loadingMore && <AnimatedSpinner height="7rem" noMargin />}
					<Row sm={1} md={2} lg={3} xl={4} className="g-3 g-md-4">
						{athleteActivities.map(
							({ polyline, title, time, distance, speed, id, predictedType, start }, index) => (
								<Col key={id} ref={index === 0 && page >= MAX_PAGES ? topRef : null}>
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
					{loadingMore ? <AnimatedSpinner height="7rem" noMargin /> : hasMore && <div ref={bottomRef} />}
				</>
			) : (
				<NoResults />
			)}
		</Container>
	)
}

export default connect(DataContainer)
