import React, { useContext, useRef } from "react"
import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import interactionPlugin from "@fullcalendar/interaction"
import { PageContainer, CalendarContainer } from "./components"
import ThemeContext from "../../../../../../theme/themeContext"
import { Event } from "../event"
import { AnimatedSpinner } from "../../../../../../globalComponents/animatedSpinner"
import { fetchEvents } from "../../../../utils/fetchEvents.ts"

export const Calendar = () => {
	const { theme } = useContext(ThemeContext)
	const spinnerRef = useRef<HTMLDivElement>(null)

	// TODO - hide calendar when loading, right now it is just below
	// spinner off screen until you scroll

	return (
		<PageContainer>
			<CalendarContainer theme={theme}>
				<div ref={spinnerRef} className="spinner hidden">
					<AnimatedSpinner />
				</div>
				<FullCalendar
					plugins={[dayGridPlugin, interactionPlugin]}
					initialView="dayGridMonth"
					// hacky solution but full calendar doesn't like react state or redux
					loading={(isLoading) => {
						if (spinnerRef.current === null) return
						if (isLoading) {
							spinnerRef.current.classList.remove("hidden")
						} else {
							spinnerRef.current.classList.add("hidden")
						}
					}}
					fixedWeekCount={false}
					eventContent={(eventInfo) => <Event eventInfo={eventInfo} />}
					events={(info, successCallback, failureCallback) => {
						fetchEvents(info, successCallback, failureCallback)
					}}
				/>
			</CalendarContainer>
		</PageContainer>
	)
}
