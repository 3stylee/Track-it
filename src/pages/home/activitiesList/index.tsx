import React, { useEffect, useState } from "react"
import DataContainer from "./dataContainer"
import { PageContainer } from "./components"
import connect from "./connect"
import { DateRange } from "react-day-picker"
import { getBeforeAndAfterDates } from "../../../utils/getBeforeAndAfterDates"
import { getDateRangeFromUrl } from "../../../utils/getDateRangeFromUrl"
import TitleHeader from "./titleHeader"
import { PAGE_SIZE } from "../../../constants/constants"

interface ActivitiesListProps {
	gotInitialActivities: boolean
	activityCount: number
	loadAthleteActivities: (dateBefore?: number, dateAfter?: number) => void
	loadInitialAthleteActivities: (limit?: number) => void
	resetListSize: () => void
}

export const ActivitiesList = ({
	gotInitialActivities,
	activityCount,
	loadAthleteActivities,
	loadInitialAthleteActivities,
	resetListSize,
}: ActivitiesListProps) => {
	const [selected, setSelected] = useState<DateRange>(getDateRangeFromUrl())
	const [filterApplied, setFilterApplied] = useState(selected?.from !== undefined)

	// On initial load trim the activities list to page size to avoid rendering all activities at once
	useEffect(() => {
		if (activityCount > PAGE_SIZE) resetListSize()
	}, [resetListSize])

	useEffect(() => {
		if (selected.from && selected.to) {
			const { before, after } = getBeforeAndAfterDates(selected)
			loadAthleteActivities(before, after)
		} else if (!gotInitialActivities || activityCount < PAGE_SIZE) {
			loadInitialAthleteActivities(PAGE_SIZE)
		}
	}, [])

	return (
		<PageContainer>
			<TitleHeader
				selected={selected}
				setSelected={setSelected}
				filterApplied={filterApplied}
				setFilterApplied={setFilterApplied}
			/>
			<DataContainer filterApplied={filterApplied} />
		</PageContainer>
	)
}

export default connect(ActivitiesList)
