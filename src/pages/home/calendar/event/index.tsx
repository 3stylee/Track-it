import React from "react"
import { AthleteIcon, EventContainer, EventHeader, Title } from "./components"
import { convertMetersToDistance } from "../../../../utils/convertMetersToDistance"
import connect from "./connect"

const Event = ({ eventInfo, units }: any) => {
	return (
		<EventContainer>
			<EventHeader>
				<AthleteIcon src={require("../../../../assets/icons/athlete.ico")} alt="athlete icon" />
				<div>{eventInfo.timeText}m</div>
			</EventHeader>
			<Title>{eventInfo.event.title}</Title>
			<div>
				{convertMetersToDistance(eventInfo.event.extendedProps.distance, units.meters)} {units.unitString}
			</div>
		</EventContainer>
	)
}

export default connect(Event)
