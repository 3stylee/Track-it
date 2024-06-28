import React from "react"
import RouteMap from "../routeMap"
import connect from "./connect"
import decodePolyLine from "../../../../utils/decodePolyline"
import { Row } from "react-bootstrap"
import { AnimatedSpinner } from "../../../../globalComponents/animatedSpinner"
import { NoResults } from "../noResults"
import { Container, LoadMoreContainer } from "./components"
import { getDateRangeFromUrl } from "../../../../utils/getDateRangeFromUrl"
import { getBeforeAndAfterDates } from "../../../../utils/getBeforeAndAfterDates"
import { trimData } from "../../../../utils/trimData"
import { AthleteActivities } from "../../../../models/activities"
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
	loadAthleteActivities: (before?: number, after?: number, loadPrevious?: boolean) => void
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
		prevPage()
		loadAthleteActivities(before, after, true)
	}
	const scrollDown = () => {
		nextPage()
		loadAthleteActivities(before, after)
	}
	const { topRef, bottomRef } = useInfiniteScroll(scrollUp, scrollDown, before, after)

	if (apiCallsInProgress > 0) return <AnimatedSpinner height="95%" noMargin />
	return (
		<Container>
			{athleteActivities.length > 0 ? (
				<Row sm={1} md={2} lg={3} xl={4} className="g-3 g-md-4">
					<LoadMoreContainer>
						{loadingMore ? (
							<AnimatedSpinner height="7rem" noMargin />
						) : (
							page > MAX_PAGES - 1 && <div ref={topRef} />
						)}
					</LoadMoreContainer>
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
						{loadingMore ? <AnimatedSpinner height="7rem" noMargin /> : hasMore && <div ref={bottomRef} />}
					</LoadMoreContainer>
				</Row>
			) : (
				<NoResults />
			)}
		</Container>
	)
}

export default connect(DataContainer)
