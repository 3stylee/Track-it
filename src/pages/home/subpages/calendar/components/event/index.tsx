import React from "react"
import { EventContainer } from "./components"

export const Event = ({ eventInfo }: any) => {
	return (
		<EventContainer>
			<div>{eventInfo.timeText}m</div>
			<div>{eventInfo.event.title}</div>
			<div>{eventInfo.event.extendedProps.distance}</div>
		</EventContainer>
	)
}
