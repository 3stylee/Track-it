import React from "react"
import LineChart from "../lineChart"

export const ActivityGraph = () => {
	return (
		<div className="card h-100">
			<div className="card-body">
				<div className="card-text">
					<LineChart />
				</div>
			</div>
		</div>
	)
}
