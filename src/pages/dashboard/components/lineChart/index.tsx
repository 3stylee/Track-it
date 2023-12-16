import React from "react"
import { Line } from "react-chartjs-2"
import { MONTH_GRAPH_LABELS, WEEK_GRAPH_LABELS } from "../../../../constants"
import { CategoryScale, LinearScale, PointElement, LineElement, Chart } from "chart.js"
import { GraphContainer } from "./components"
import options from "./chartOptions"

interface LineChartProps {
	weekOrMonth: String
}

Chart.register(CategoryScale, LinearScale, PointElement, LineElement)

export const LineChart = ({ weekOrMonth }: LineChartProps) => {
	const labels = weekOrMonth === "Week" ? WEEK_GRAPH_LABELS : MONTH_GRAPH_LABELS
	const data = {
		labels,
		datasets: [
			{
				label: "Acquisitions by year",
				data: labels.map((label) => label.length),
			},
		],
	}
	return (
		<GraphContainer>
			<Line options={options} data={data} />
		</GraphContainer>
	)
}
