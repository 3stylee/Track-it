import React from "react"
import { Line } from "react-chartjs-2"
import { CategoryScale, LogarithmicScale, PointElement, LineElement, Chart, Title, Tooltip, Filler } from "chart.js"
import annotationPlugin from "chartjs-plugin-annotation"
Chart.register(CategoryScale, LogarithmicScale, PointElement, LineElement, Title, Tooltip, Filler, annotationPlugin)

interface LineChartProps {
	time: string[]
	label: string
	streamData: number[]
	backgroundColor: string
	options: any
}

export const LineChart = ({ time, label, streamData, backgroundColor, options }: LineChartProps) => {
	const data = {
		labels: time,
		datasets: [
			{
				fill: "start",
				label,
				data: streamData,
				backgroundColor,
				pointRadius: 0,
				pointHitRadius: 20,
				lineTension: 0.2,
			},
		],
	}

	return (
		<div>
			<Line options={options} data={data} />
		</div>
	)
}
