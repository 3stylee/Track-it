import React from "react"
import LineChart from "../lineChart"
import { CardHeader, GraphTitle } from "./components"
import { DesktopSort } from "../desktopSort"
import { WEEK_OR_MONTH } from "../../../../../../constants"
import { Card } from "../../../../../../globalComponents/bootstrapCard"

export const MileageChart = () => {
	const [weekOrMonth, setWeekOrMonth] = React.useState(WEEK_OR_MONTH.WEEK)

	return (
		<Card
			cardHeader={
				<CardHeader className="card-header">
					<GraphTitle>Mileage</GraphTitle>
					<DesktopSort weekOrMonth={weekOrMonth} setWeekOrMonth={setWeekOrMonth} />
				</CardHeader>
			}>
			<div className="card-text">
				<LineChart weekOrMonth={weekOrMonth} />
			</div>
		</Card>
	)
}
