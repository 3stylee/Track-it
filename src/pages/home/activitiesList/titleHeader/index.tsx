import React from "react"
import { Filters, Title } from "./components"
import { getBeforeAndAfterDates } from "../../../../utils/getBeforeAndAfterDates"
import { DatePicker } from "../datePicker"
import connect from "./connect"
import { DateRange } from "react-day-picker"
import { PAGE_SIZE, ROUTE_PATHS } from "../../../../constants/constants"

interface TitleHeaderProps {
	loading: boolean
	selected: DateRange
	firstActivityDate: string | undefined
	setSelected: (date: DateRange) => void
	filterApplied: boolean
	setFilterApplied: (filter: boolean) => void
	resetPageNumber: () => void
	loadAthleteActivities: (before: number, after: number) => void
	loadInitialAthleteActivities: (limit?: number) => void
}

const TitleHeader = ({
	loading,
	selected,
	firstActivityDate,
	setSelected,
	filterApplied,
	setFilterApplied,
	resetPageNumber,
	loadAthleteActivities,
	loadInitialAthleteActivities,
}: TitleHeaderProps) => {
	return (
		<Filters>
			<Title>Your Activities</Title>
			<DatePicker
				loading={loading}
				onClick={() => {
					resetPageNumber()
					const { before, after } = getBeforeAndAfterDates(selected)
					window.history.pushState({}, "", `?before=${before}&after=${after}`)
					if (before && after) loadAthleteActivities(before, after)
				}}
				selected={selected}
				setSelected={setSelected}
				clearFilter={() => {
					loadInitialAthleteActivities(PAGE_SIZE)
					window.history.pushState({}, "", ROUTE_PATHS.SEARCH_ACTIVITIES)
				}}
				filterApplied={filterApplied}
				setFilterApplied={setFilterApplied}
				firstActivityDate={firstActivityDate}
			/>
		</Filters>
	)
}

export default connect(TitleHeader)
