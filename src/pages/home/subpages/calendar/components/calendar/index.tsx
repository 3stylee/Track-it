import React, { useContext, useEffect } from "react"
import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import interactionPlugin from "@fullcalendar/interaction"
import { PageContainer, CalendarContainer } from "./components"
import ThemeContext from "../../../../../../theme/themeContext"
import { Event } from "../event"
import connect from "./connect"
import { getActivityDataIfNeeded } from "../../../../utils/getActivityDataIfNeeded"
import { AnimatedSpinner } from "../../../../../../globalComponents/animatedSpinner"

interface CalendarProps {
	athleteActivities: any
	loadAthleteActivities: any
	apiCallsInProgress: number
}

export const Calendar = ({ athleteActivities, loadAthleteActivities, apiCallsInProgress }: CalendarProps) => {
	const { theme } = useContext(ThemeContext)

	useEffect(() => {
		getActivityDataIfNeeded(athleteActivities.text, loadAthleteActivities)
	}, [])

	// TODO replace this with something meaningful
	const handleDateClick = (arg: any) => {
		alert(`Date clicked: ${arg.dateStr}`)
	}

	return (
		<PageContainer>
			<CalendarContainer theme={theme}>
				{apiCallsInProgress > 0 ? (
					<AnimatedSpinner />
				) : (
					<FullCalendar
						plugins={[dayGridPlugin, interactionPlugin]}
						initialView="dayGridMonth"
						dateClick={(arg) => {
							handleDateClick(arg)
						}}
						fixedWeekCount={false}
						eventContent={(eventInfo) => <Event eventInfo={eventInfo} />}
						initialEvents={athleteActivities}
					/>
				)}
			</CalendarContainer>
		</PageContainer>
	)
}

export default connect(Calendar)
