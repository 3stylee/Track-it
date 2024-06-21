import React, { useEffect, useRef, useState } from "react"
import DataContainer from "./dataContainer"
import { PageContainer } from "./components"
import connect from "./connect"
import { DateRange } from "react-day-picker"
import { getBeforeAndAfterDates } from "../../../utils/getBeforeAndAfterDates"
import { getDateRangeFromUrl } from "../../../utils/getDateRangeFromUrl"
import TitleHeader from "./titleHeader"
import ApiError from "../../../globalComponents/apiError"
import { INITIAL_PAGE_SIZE } from "../../../constants/constants"

interface ActivitiesListProps {
	apiError: string | object
	gotInitialActivities: boolean
	loadAthleteActivities: (page: number, dateBefore?: number, dateAfter?: number) => void
	loadInitialAthleteActivities: (limit?: number) => void
}

export const ActivitiesList = ({
	apiError,
	gotInitialActivities,
	loadAthleteActivities,
	loadInitialAthleteActivities,
}: ActivitiesListProps) => {
	const containerRef = useRef<HTMLDivElement | null>(null)
	const [selected, setSelected] = useState<DateRange>(getDateRangeFromUrl())
	const [filterApplied, setFilterApplied] = useState(selected?.from !== undefined)
	const [page, setPage] = useState(0)

	useEffect(() => {
		if (selected.from && selected.to) {
			const { before, after } = getBeforeAndAfterDates(selected)
			loadAthleteActivities(page, before, after)
		} else if (!gotInitialActivities) {
			loadInitialAthleteActivities(INITIAL_PAGE_SIZE)
		}
	}, [filterApplied])

	if (apiError !== "") return <ApiError />
	return (
		<PageContainer ref={containerRef}>
			<TitleHeader
				selected={selected}
				setSelected={setSelected}
				setPage={setPage}
				filterApplied={filterApplied}
				setFilterApplied={setFilterApplied}
				containerRef={containerRef}
			/>
			<DataContainer setPage={setPage} page={page} />
		</PageContainer>
	)
}

export default connect(ActivitiesList)
