import React, { useEffect } from "react"
import connect from "./connect"
import ApiError from "../../../globalComponents/apiError"
import { PageContainer, Title } from "./components"
import DesktopCalendar from "./desktopCalendar"
import useMonthNavigation from "./useMonthNavigation"
import NavButtons from "./navButtons"
import { format } from "date-fns"
import { LoadAthleteActivities } from "../../../models/activities"
import { getBeforeAndAfterForCalendar } from "../../../utils/getBeforeAndAfterDates"

interface CalendarProps {
	apiError: string | object
	loadAthleteActivities: LoadAthleteActivities
	resetPageNumber: () => void
}

const Calendar = ({ apiError, loadAthleteActivities, resetPageNumber }: CalendarProps) => {
	const { currentYear, currentMonth, handleNextMonth, handlePrevMonth, setToToday } = useMonthNavigation()

	useEffect(() => {
		resetPageNumber()
	}, [])

	useEffect(() => {
		const { before, after } = getBeforeAndAfterForCalendar(currentMonth, currentYear)
		loadAthleteActivities(before, after)
	}, [currentYear, currentMonth, resetPageNumber, loadAthleteActivities])

	if (apiError !== "") return <ApiError />
	return (
		<PageContainer>
			<Title>
				<h3>{format(new Date(currentYear, currentMonth), "MMMM yyyy")}</h3>
				<NavButtons
					currentMonth={currentMonth}
					currentYear={currentYear}
					handleNextMonth={handleNextMonth}
					handlePrevMonth={handlePrevMonth}
					setToToday={setToToday}
				/>
			</Title>
			<DesktopCalendar currentYear={currentYear} currentMonth={currentMonth} />
		</PageContainer>
	)
}

export default connect(Calendar)
