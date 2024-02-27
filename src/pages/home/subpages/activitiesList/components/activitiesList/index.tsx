import React, { useEffect, useRef, useState } from "react"
import DataContainer from "../dataContainer"
import { Filters, PageContainer } from "./components"
import connect from "./connect"
import { getActivityData } from "../../../../utils/getActivityData"
import { DataFlags } from "../../models"
import { DatePicker } from "../datePicker"
import { DateRange } from "react-day-picker"
import { getBeforeAndAfterDates } from "../../../../utils/getBeforeAndAfterDates"

interface ActivitiesListProps {
	dataFlags: DataFlags
	loadAthleteActivities: (dateBefore?: number, dateAfter?: number, hasFilter?: boolean) => void
}

export const ActivitiesList = ({ dataFlags: { gotInitialActivities }, loadAthleteActivities }: ActivitiesListProps) => {
	const containerRef = useRef<HTMLDivElement | null>(null)
	const [selected, setSelected] = useState<DateRange>()
	useEffect(() => {
		if (!gotInitialActivities) getActivityData(loadAthleteActivities)
	}, [])

	return (
		<PageContainer ref={containerRef}>
			<Filters>
				<DatePicker
					onClick={() => {
						const { before, after } = getBeforeAndAfterDates(selected)
						loadAthleteActivities(before, after, true)
					}}
					selected={selected}
					setSelected={setSelected}
					containerRef={containerRef}
					clearFilter={() => getActivityData(loadAthleteActivities)}
				/>
			</Filters>
			<DataContainer />
		</PageContainer>
	)
}

export default connect(ActivitiesList)
