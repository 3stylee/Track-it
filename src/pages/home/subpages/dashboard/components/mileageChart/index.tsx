import React from "react"
import { LineChart } from "../lineChart"
import { CardHeader, GraphTitle, TotalText } from "./components"
import { DesktopSort } from "../desktopSort"
import { WEEK_OR_MONTH } from "../../../../../../constants"
import { Card } from "../../../../../../globalComponents/bootstrapCard"
import { getMonthMileageArray, getWeekMileageArray } from "../../../../utils/getMileageArray"
import connect from "./connect"

export const MileageChart = ({ athleteActivities }: any) => {
	const [weekOrMonth, setWeekOrMonth] = React.useState(WEEK_OR_MONTH.WEEK)
	const mileageData =
		weekOrMonth === WEEK_OR_MONTH.WEEK
			? getWeekMileageArray(athleteActivities)
			: getMonthMileageArray(athleteActivities)

	return (
		<Card
			cardHeader={
				<CardHeader className="card-header">
					<GraphTitle>Mileage</GraphTitle>
					<DesktopSort weekOrMonth={weekOrMonth} setWeekOrMonth={setWeekOrMonth} />
				</CardHeader>
			}>
			<div className="card-text">
				<TotalText>{mileageData.reduce((partialSum, a) => partialSum + a, 0).toFixed(2)}km</TotalText>
				<LineChart weekOrMonth={weekOrMonth} mileageData={mileageData} />
			</div>
		</Card>
	)
}

export default connect(MileageChart)
