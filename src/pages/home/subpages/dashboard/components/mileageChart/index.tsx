import React, { useState } from "react"
import { LineChart } from "../lineChart"
import { CardHeader, GraphTitle } from "./components"
import { DesktopSort } from "../desktopSort"
import { SORT_OPTIONS } from "../../../../../../constants"
import { getMileageArray } from "../../../../utils/getMileageArray"
import connect from "./connect"
import { getDivisor } from "../../../../utils/getDivisor"
import { LabelledStats, Stat } from "../../../../../../globalComponents/labelledStats"
import { Card } from "react-bootstrap"
import { useTheme } from "@emotion/react"

export const MileageChart = ({ athleteActivities }: any) => {
	const theme = useTheme()
	const [weekOrMonth, setWeekOrMonth] = useState(SORT_OPTIONS.WEEK)
	const isWeek = weekOrMonth === SORT_OPTIONS.WEEK
	const mileageData = getMileageArray(athleteActivities, weekOrMonth)
	const total = mileageData.reduce((partialSum, a) => partialSum + a, 0).toFixed(2)
	const stats: Stat[] = [
		{
			text: "Total",
			value: total,
			unit: "KM",
		},
		{
			text: `${isWeek ? "Daily" : "Weekly"} Average`,
			value: (total / getDivisor(isWeek)).toFixed(2),
			unit: "KM",
		},
	]

	return (
		<Card bg={theme.bootstrap.background} text={theme.bootstrap.textColor}>
			<Card.Body>
				<CardHeader>
					<GraphTitle>Mileage</GraphTitle>
					<DesktopSort weekOrMonth={weekOrMonth} setWeekOrMonth={setWeekOrMonth} />
				</CardHeader>
				<div>
					<LabelledStats stats={stats} />
					<LineChart weekOrMonth={weekOrMonth} mileageData={mileageData} />
				</div>
			</Card.Body>
		</Card>
	)
}

export default connect(MileageChart)
