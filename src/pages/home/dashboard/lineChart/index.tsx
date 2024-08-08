import React, { useEffect, useRef, useState } from "react"
import { Line } from "react-chartjs-2"
import { SORT_OPTIONS, WEEK_GRAPH_LABELS } from "../../../../constants/constants"
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
	const chartRef = useRef<HTMLDivElement>(null)
	const [gradient, setGradient] = useState<string | CanvasGradient | CanvasPattern>("")

	useEffect(() => {
		const canvas = chartRef.current?.firstChild as HTMLCanvasElement | null
		if (canvas) {
			const ctx = canvas.getContext("2d")
			if (ctx) {
				const gradient = ctx.createLinearGradient(0, 0, 0, 400)
				gradient.addColorStop(0.3, "rgba(102, 61, 255, 0.5)")
				gradient.addColorStop(1, "rgba(255, 255, 255, 0)")
				setGradient(gradient)
			}
		}
	}, [chartRef])

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
				backgroundColor: gradient,
				pointHitRadius: 20,
			},
		],
	}
	return (
		<div ref={chartRef}>
			<Line options={options} data={data} />
		</div>
	)
}
