import React from "react"
import LineChart from "../lineChart"
import { CardBody } from "./components"

interface MileageChartProps {
	dashboardSortMetric: string
}

export const MileageChart = ({ dashboardSortMetric }: MileageChartProps) => {
	return (
		<div className="card h-100">
			<CardBody className="card-body">
				<div className="card-text">
					<LineChart weekOrMonth={dashboardSortMetric} />
				</div>
			</CardBody>
		</div>
	)
}
