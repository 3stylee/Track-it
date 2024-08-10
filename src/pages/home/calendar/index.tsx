import React, { useEffect } from "react"
import connect from "./connect"
import ApiError from "../../../globalComponents/apiError"
import { PageContainer, PageTitle, Title } from "./components"
import DesktopCalendar from "./desktopCalendar"
import NavButtons from "./navButtons"
import { format } from "date-fns"
import { LoadAthleteActivities } from "../../../models/activities"
import { getBeforeAndAfterForCalendar } from "../../../utils/getBeforeAndAfterDates"
import MobileCalendar from "./mobileCalendar"

interface CalendarProps {
	apiError: string | object
	selectedDate: Date
	loadAthleteActivities: LoadAthleteActivities
	resetPageNumber: () => void
}

const Calendar = ({ apiError, selectedDate, loadAthleteActivities, resetPageNumber }: CalendarProps) => {
	useEffect(() => {
		resetPageNumber()
	}, [])

	useEffect(() => {
		const { before, after } = getBeforeAndAfterForCalendar(selectedDate)
		loadAthleteActivities(before, after)
	}, [selectedDate, resetPageNumber, loadAthleteActivities])

	return (
		<PageContainer>
			<Title>
				<PageTitle>{format(selectedDate, "MMMM yyyy")}</PageTitle>
				<NavButtons selectedDate={selectedDate} />
			</Title>
			<DesktopCalendar />
			<MobileCalendar />
			{apiError !== "" && <ApiError height={"65vh"} />}
		</PageContainer>
	)
}

export default connect(Calendar)
