import React from "react"
import { AthleteIcon, EventContainer, EventHeader, Title } from "./components"
import { convertToKm } from "../../../../utils/convertDistanceToKM"

export const Event = ({ eventInfo }: any) => {
	return (
		<EventContainer>
			<EventHeader>
				<AthleteIcon src={require("../../../../../../assets/icons/athlete.ico")} alt="athlete icon" />
				<div>{eventInfo.timeText}m</div>
			</EventHeader>
			<Title>{eventInfo.event.title}</Title>
			<div>{convertToKm(eventInfo.event.extendedProps.distance)} Km</div>
		</EventContainer>
	)
}
