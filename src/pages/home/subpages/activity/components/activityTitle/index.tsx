import { useTheme } from "@emotion/react"
import React from "react"
import { Card } from "react-bootstrap"
import connect from "./connect"
import { Title } from "./components"
import { LabelledStats, Stat } from "../../../../../../globalComponents/labelledStats"
import { convertToKm } from "../../../../utils/convertDistanceToKM"
import { getMinsFromSeconds } from "../../../../utils/getMinsFromSeconds"

export const ActivityTitle = ({ currentActivity }: any) => {
	const theme = useTheme()
	if (currentActivity.distance === undefined) return null
	const stats: Stat[] = [
		{
			text: "Distance",
			value: convertToKm(currentActivity.distance),
			unit: "KM",
		},
		{
			text: "Moving Time",
			value: getMinsFromSeconds(currentActivity.moving_time),
			unit: "mins",
		},
		{
			text: "Elapsed Time",
			value: getMinsFromSeconds(currentActivity.elapsed_time),
			unit: "mins",
		},
		{
			text: "Average Pace",
			value: getMinsFromSeconds(1000 / currentActivity.average_speed),
			unit: "/ KM",
		},
		{
			text: "Average Heart Rate",
			value: currentActivity.average_heartrate.toFixed(0),
			unit: "bpm",
		},
	]
	return (
		<Card bg={theme.bootstrap.background} text={theme.bootstrap.textColor} className="w-100">
			<Card.Body>
				<Title>{currentActivity.name}</Title>
				<LabelledStats stats={stats} />
			</Card.Body>
		</Card>
	)
}

export default connect(ActivityTitle)
