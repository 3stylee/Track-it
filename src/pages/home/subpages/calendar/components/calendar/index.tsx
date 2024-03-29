import React, { useRef } from "react"
import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import interactionPlugin from "@fullcalendar/interaction"
import { PageContainer, CalendarContainer, SpinnerContainer } from "./components"
import Event from "../event"
import { fetchEvents } from "../../../../utils/fetchEvents"
import Lottie from "lottie-react"
import loadingAnimation from "../../../../../../assets/animations/olympics.json"
import { setCalendarClasses } from "../../../../utils/setCalendarClasses"

export const Calendar = () => {
	const spinnerRef = useRef<HTMLDivElement>(null)
	const calendarRef = useRef<HTMLDivElement>(null)

	return (
		<PageContainer>
			<CalendarContainer>
				<SpinnerContainer ref={spinnerRef} className="spinner hidden">
					<Lottie animationData={loadingAnimation} />
				</SpinnerContainer>
				<div ref={calendarRef} className="calendar">
					<FullCalendar
						plugins={[dayGridPlugin, interactionPlugin]}
						initialView="dayGridMonth"
						loading={(isLoading) => {
							setCalendarClasses(isLoading, spinnerRef, calendarRef)
						}}
						fixedWeekCount={false}
						eventContent={(eventInfo) => <Event eventInfo={eventInfo} />}
						events={(info, successCallback, failureCallback) => {
							fetchEvents(info, successCallback, failureCallback)
						}}
						firstDay={1}
						showNonCurrentDates={false}
						expandRows={false}
						dayMaxEventRows={3}
						height={"auto"}
						stickyHeaderDates={false}
					/>
				</div>
			</CalendarContainer>
		</PageContainer>
	)
}
