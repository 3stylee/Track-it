import React, { useEffect, useRef, useState } from "react"
import DataContainer from "../dataContainer"
import { Filters, PageContainer } from "./components"
import connect from "./connect"
import { getActivityData } from "../../../../utils/getActivityData"
import { DataFlags } from "../../models"
import { DatePicker } from "../datePicker"
import { DateRange } from "react-day-picker"
import { getBeforeAndAfterDates } from "../../../../utils/getBeforeAndAfterDates"
import { getDateRangeFromUrl } from "../../../../utils/getDateRangeFromUrl"

interface ActivitiesListProps {
	dataFlags: DataFlags
	loadAthleteActivities: (dateBefore?: number, dateAfter?: number, hasFilter?: boolean) => void
}

export const ActivitiesList = ({ dataFlags: { gotInitialActivities }, loadAthleteActivities }: ActivitiesListProps) => {
	const containerRef = useRef<HTMLDivElement | null>(null)
	const [selected, setSelected] = useState<DateRange>(getDateRangeFromUrl())
	const [filterApplied, setFilterApplied] = useState(selected?.from !== undefined)

	useEffect(() => {
		if (selected.from && selected.to) {
			const { before, after } = getBeforeAndAfterDates(selected)
			loadAthleteActivities(before, after, true)
		} else if (!gotInitialActivities) {
			getActivityData(loadAthleteActivities)
		}
	}, [filterApplied])

	return (
		<PageContainer ref={containerRef}>
			<Filters>
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
			<DataContainer />
		</PageContainer>
	)
}

export default connect(ActivitiesList)
