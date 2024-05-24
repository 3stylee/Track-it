import React, { useEffect, useRef, useState } from "react"
import DataContainer from "../dataContainer"
import { PageContainer } from "./components"
import connect from "./connect"
import { getActivityData } from "../../../../utils/getActivityData"
import { DataFlags } from "../../models"
import { DateRange } from "react-day-picker"
import { getBeforeAndAfterDates } from "../../../../utils/getBeforeAndAfterDates"
import { getDateRangeFromUrl } from "../../../../utils/getDateRangeFromUrl"
import TitleHeader from "../titleHeader"
import ApiError from "../../../../../../globalComponents/apiError"

interface ActivitiesListProps {
	dataFlags: DataFlags
	apiError: string | object
	loadAthleteActivities: (dateBefore?: number, dateAfter?: number, hasFilter?: boolean) => void
}

export const ActivitiesList = ({
	dataFlags: { gotInitialActivities },
	apiError,
	loadAthleteActivities,
}: ActivitiesListProps) => {
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
