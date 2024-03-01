import React from "react"
import { Filters, Title } from "./components"
import { getBeforeAndAfterDates } from "../../../../utils/getBeforeAndAfterDates"
import { DatePicker } from "../datePicker"
import connect from "./connect"
import { DateRange } from "react-day-picker"

interface TitleHeaderProps {
	loadAthleteActivities: (dateBefore?: number, dateAfter?: number, hasFilter?: boolean) => void
	selected: DateRange
	setSelected: (date: DateRange) => void
	containerRef: React.RefObject<HTMLDivElement>
	filterApplied: boolean
	setFilterApplied: (filter: boolean) => void
}

const TitleHeader = ({
	loadAthleteActivities,
	selected,
	setSelected,
	containerRef,
	filterApplied,
	setFilterApplied,
}: TitleHeaderProps) => {
	return (
		<Filters>
			<Title>Activities</Title>
			<DatePicker
				onClick={() => {
					const { before, after } = getBeforeAndAfterDates(selected)
					window.history.pushState({}, "", `?before=${before}&after=${after}`)
					loadAthleteActivities(before, after, true)
				}}
				selected={selected}
				setSelected={setSelected}
				containerRef={containerRef}
				clearFilter={() => {
					window.history.pushState({}, "", "/home/search")
				}}
				filterApplied={filterApplied}
				setFilterApplied={setFilterApplied}
			/>
		</Filters>
	)
}

export default connect(TitleHeader)
