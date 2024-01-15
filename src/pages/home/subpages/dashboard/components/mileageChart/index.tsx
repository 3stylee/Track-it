import React from "react"
import LineChart from "../lineChart"
import { CardBody } from "./components"
import { DesktopSort } from "../desktopSort"
import { WEEK_OR_MONTH } from "../../../../../../constants"

export const MileageChart = () => {
	const [weekOrMonth, setWeekOrMonth] = React.useState(WEEK_OR_MONTH.WEEK)

	return (
		<div className="card h-100">
			<CardBody className="card-body">
				<DesktopSort weekOrMonth={weekOrMonth} setWeekOrMonth={setWeekOrMonth} />
				<div className="card-text">
					<LineChart weekOrMonth={weekOrMonth} />
				</div>
			</CardBody>
		</div>
	)
}
