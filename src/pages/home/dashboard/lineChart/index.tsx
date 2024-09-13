import React, { useEffect, useRef, useState } from "react"
import { Line } from "react-chartjs-2"
import { SORT_OPTIONS, WEEK_GRAPH_LABELS } from "../../../../constants/constants"
import { CategoryScale, LinearScale, PointElement, LineElement, Chart, Title, Tooltip, Filler } from "chart.js"
import { getCurrentMonthWeeks } from "../../../../utils/getWeeksOfMonth"
import { getMonthWeekLabels } from "../../../../utils/getMonthWeekLabels"
import { useTheme } from "@emotion/react"
import options from "./chartOptions"

const dummyChartData = [8, 7, 10, 5, 8, 5, 12]

interface LineChartProps {
	weekOrMonth: String
	mileageData: number[]
	loading: boolean
}

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler)

export const LineChart = ({ weekOrMonth, mileageData, loading }: LineChartProps) => {
	const chartRef = useRef<HTMLDivElement>(null)
	const theme = useTheme()
	const [gradient, setGradient] = useState<string | CanvasGradient | CanvasPattern>("")

	useEffect(() => {
		const canvas = chartRef.current?.firstChild as HTMLCanvasElement | null
		if (canvas) {
			const ctx = canvas.getContext("2d")
			if (ctx) {
				const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height / 2)
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
				data: loading ? dummyChartData : mileageData,
				borderColor: loading ? theme.loading.placeholderBackground : "rgb(102, 61, 255)",
				backgroundColor: loading ? theme.loading.placeholderBackground : gradient,
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
