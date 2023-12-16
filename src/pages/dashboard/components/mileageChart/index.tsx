import React from "react"
import { LineChart } from "../lineChart"

export const MileageChart = () => {
	return (
		<div className="card">
			<div className="card-body">
				<div className="card-title">Mileage</div>
				<div className="card-text">
					<LineChart weekOrMonth={"Week"} />
				</div>
			</div>
		</div>
	)
}
