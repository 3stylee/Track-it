import React, { useEffect, useRef, useState } from "react"
import DataContainer from "../dataContainer"
import { PageContainer } from "./components"
import connect from "./connect"
import { DateRange } from "react-day-picker"
import { getBeforeAndAfterDates } from "../../../../utils/getBeforeAndAfterDates"
import { getDateRangeFromUrl } from "../../../../utils/getDateRangeFromUrl"
import TitleHeader from "../titleHeader"
import ApiError from "../../../../../../globalComponents/apiError"
import { INITIAL_PAGE_ACTIVITIES } from "../../../../../../constants/constants"

interface ActivitiesListProps {
	apiError: string | object
	gotInitialActivities: boolean
	loadAthleteActivities: (dateBefore?: number, dateAfter?: number, hasFilter?: boolean, limit?: number) => void
}

export const ActivitiesList = ({ apiError, gotInitialActivities, loadAthleteActivities }: ActivitiesListProps) => {
	const containerRef = useRef<HTMLDivElement | null>(null)
	const [selected, setSelected] = useState<DateRange>(getDateRangeFromUrl())
	const [filterApplied, setFilterApplied] = useState(selected?.from !== undefined)

	useEffect(() => {
		if (selected.from && selected.to) {
			const { before, after } = getBeforeAndAfterDates(selected)
			loadAthleteActivities(before, after, true)
		} else if (!gotInitialActivities) {
			loadAthleteActivities(undefined, undefined, false, INITIAL_PAGE_ACTIVITIES)
		}
	}, [filterApplied])

	if (apiError !== "") return <ApiError />
	return (
		<PageContainer ref={containerRef}>
			<TitleHeader
				selected={selected}
				setSelected={setSelected}
				filterApplied={filterApplied}
				setFilterApplied={setFilterApplied}
				containerRef={containerRef}
			/>
			<DataContainer />
		</PageContainer>
	)
}

export default connect(ActivitiesList)
