import React from "react"
import { Filters, Title } from "./components"
import { getBeforeAndAfterDates } from "../../../../utils/getBeforeAndAfterDates"
import { DatePicker } from "../datePicker"
import connect from "./connect"
import { DateRange } from "react-day-picker"
import { ROUTE_PATHS } from "../../../../constants/constants"

interface TitleHeaderProps {
	selected: DateRange
	firstActivityDate: string | undefined
	setSelected: (date: DateRange) => void
	filterApplied: boolean
	setFilterApplied: (filter: boolean) => void
	resetPageNumber: () => void
}

const TitleHeader = ({
	selected,
	firstActivityDate,
	setSelected,
	filterApplied,
	setFilterApplied,
	resetPageNumber,
}: TitleHeaderProps) => {
	return (
		<Filters>
			<Title>Your Activities</Title>
			<DatePicker
				onClick={() => {
					resetPageNumber()
					const { before, after } = getBeforeAndAfterDates(selected)
					window.history.pushState({}, "", `?before=${before}&after=${after}`)
				}}
				selected={selected}
				setSelected={setSelected}
				clearFilter={() => {
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
