import React from "react"
import { Filters, Title } from "./components"
import { getBeforeAndAfterDates } from "../../../../utils/getBeforeAndAfterDates"
import { DatePicker } from "../datePicker"
import connect from "./connect"
import { DateRange } from "react-day-picker"
import { ROUTE_PATHS } from "../../../../../../constants/constants"

interface TitleHeaderProps {
	selected: DateRange
	setSelected: (date: DateRange) => void
	setPage: (newPage: number) => void
	containerRef: React.RefObject<HTMLDivElement>
	filterApplied: boolean
	setFilterApplied: (filter: boolean) => void
}

const TitleHeader = ({
	selected,
	setSelected,
	setPage,
	containerRef,
	filterApplied,
	setFilterApplied,
}: TitleHeaderProps) => {
	return (
		<Filters>
			<Title>Your Activities</Title>
			<DatePicker
				onClick={() => {
					setPage(0)
					const { before, after } = getBeforeAndAfterDates(selected)
					window.history.pushState({}, "", `?before=${before}&after=${after}`)
				}}
				selected={selected}
				setSelected={setSelected}
				containerRef={containerRef}
				clearFilter={() => {
					window.history.pushState({}, "", ROUTE_PATHS.SEARCH_ACTIVITIES)
				}}
				filterApplied={filterApplied}
				setFilterApplied={setFilterApplied}
			/>
		</Filters>
	)
}

export default connect(TitleHeader)
