import React from "react"
import { Line } from "react-chartjs-2"
import { DASHBOARD_SORT_OPTIONS, WEEK_GRAPH_LABELS } from "../../../../../../constants"
import { CategoryScale, LinearScale, PointElement, LineElement, Chart, Title, Tooltip, Filler } from "chart.js"
import options from "./chartOptions"
import connect from "./connect"
import { getMonthMileageArray, getWeekMileageArray } from "../../../../utils/getMileageArray"
import { getCurrentMonthWeeks } from "../../../../utils/getWeeksOfMonth"
import { getMonthWeekLabels } from "../../../../utils/getMonthWeekLabels"

interface LineChartProps {
	weekOrMonth: String
	athleteActivities: any
}

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler)

export const LineChart = ({ weekOrMonth, athleteActivities }: LineChartProps) => {
	const monthGraphLabels = getMonthWeekLabels(getCurrentMonthWeeks())
	const labels = weekOrMonth === DASHBOARD_SORT_OPTIONS.WEEK ? WEEK_GRAPH_LABELS : monthGraphLabels
	const mileageData =
		weekOrMonth === DASHBOARD_SORT_OPTIONS.WEEK
			? getWeekMileageArray(athleteActivities)
			: getMonthMileageArray(athleteActivities)
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

export default connect(LineChart)
