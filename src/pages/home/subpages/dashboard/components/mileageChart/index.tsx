import React from "react"
import LineChart from "../lineChart"

interface MileageChartProps {
	dashboardSortMetric: string
}

export const MileageChart = ({ dashboardSortMetric }: MileageChartProps) => {
	return (
		<div className="card h-100">
			<div className="card-body">
				<div className="card-text">
					<LineChart weekOrMonth={dashboardSortMetric} />
				</div>
			</div>
		</div>
	)
}
