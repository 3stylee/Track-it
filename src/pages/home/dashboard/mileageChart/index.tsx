import React, { useState } from "react"
import { LineChart } from "../lineChart"
import { CardHeader, GraphTitle } from "./components"
import { WeekMonthDropdown } from "../weekMonthDropdown"
import { SORT_OPTIONS } from "../../../../constants/constants"
import { getMileageArray } from "../../../../utils/getMileageArray"
import { LabelledStats } from "../../../../globalComponents/labelledStats"
import connect from "./connect"
import { Card } from "react-bootstrap"
import { useTheme } from "@emotion/react"
import { Units } from "../../../../models/state"
import { getMilageChartStats } from "../../../../utils/getMileageChartStats"
import { AthleteActivities } from "../../../../models/activities"

interface MileageChartProps {
	athleteActivities: AthleteActivities
	units: Units
}

export const MileageChart = ({ athleteActivities, units }: MileageChartProps) => {
	const theme = useTheme()
	const [weekOrMonth, setWeekOrMonth] = useState(SORT_OPTIONS.WEEK)
	const mileageData = getMileageArray(athleteActivities, weekOrMonth, units.meters)
	const stats = getMilageChartStats(mileageData, weekOrMonth, units)

	return (
		<Card bg={theme.bootstrap.background} text={theme.bootstrap.textColor}>
			<Card.Header>
				<CardHeader>
					<GraphTitle>Mileage</GraphTitle>
					<WeekMonthDropdown weekOrMonth={weekOrMonth} setWeekOrMonth={setWeekOrMonth} />
				</CardHeader>
			</Card.Header>
			<Card.Body>
				<div>
					<LabelledStats stats={stats} />
					<LineChart weekOrMonth={weekOrMonth} mileageData={mileageData} />
				</div>
			</Card.Body>
		</Card>
	)
}

export default connect(MileageChart)
