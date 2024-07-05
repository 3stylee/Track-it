import React from "react"
import { AthleteIcon, EventContainer, EventHeader, Title } from "./components"
import { convertMetersToDistance } from "../../../../utils/convertMetersToDistance"
import connect from "./connect"
import { format } from "date-fns"

const Event = ({ activity, units }: any) => {
	const timeText = format(new Date(activity.start), "h:mma")
	return (
		<EventContainer>
			<EventHeader>
				<AthleteIcon src={require("../../../../assets/icons/athlete.ico")} alt="athlete icon" />
				<div>{timeText}</div>
			</EventHeader>
			<Title>{activity.title}</Title>
			<div>
				{convertMetersToDistance(activity.distance, units.meters)} {units.unitString}
			</div>
		</EventContainer>
	)
}

export default connect(Event)
