import React from "react"
import { Line } from "react-chartjs-2"
import { SORT_OPTIONS, WEEK_GRAPH_LABELS } from "../../../../../../constants/constants"
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
	const labels = weekOrMonth === SORT_OPTIONS.WEEK ? WEEK_GRAPH_LABELS : monthGraphLabels

	const data = {
		labels,
		datasets: [
			{
				fill: true,
				label: "Distance",
				data: mileageData,
				borderColor: "rgb(102, 61, 255)",
				backgroundColor: "rgba(102, 61, 255, 0.5)",
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
