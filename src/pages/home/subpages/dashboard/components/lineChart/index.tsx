import React from "react"
import { Line } from "react-chartjs-2"
import { WEEK_OR_MONTH, WEEK_GRAPH_LABELS } from "../../../../../../constants"
import { CategoryScale, LinearScale, PointElement, LineElement, Chart, Title, Tooltip, Filler } from "chart.js"
import options from "./chartOptions"
import { getCurrentMonthWeeks } from "../../../../utils/getWeeksOfMonth"
import { getMonthWeekLabels } from "../../../../utils/getMonthWeekLabels"

interface LineChartProps {
	weekOrMonth: String
	mileageData: any
}

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler)

export const LineChart = ({ weekOrMonth, mileageData }: LineChartProps) => {
	const monthGraphLabels = getMonthWeekLabels(getCurrentMonthWeeks())
	const labels = weekOrMonth === WEEK_OR_MONTH.WEEK ? WEEK_GRAPH_LABELS : monthGraphLabels

	const data = {
		labels,
		datasets: [
			{
				fill: true,
				label: "Distance",
				data: mileageData,
				borderColor: "rgb(204, 68, 153)",
				backgroundColor: "rgba(204, 68, 153, 0.5)",
				pointHitRadius: 20,
			},
		],
	}
	return (
		<div>
			<Line options={options} data={data} />
		</div>
	)
}
