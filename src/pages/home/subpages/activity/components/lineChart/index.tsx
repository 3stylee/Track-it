import React from "react"
import { Line } from "react-chartjs-2"
import { CategoryScale, LogarithmicScale, PointElement, LineElement, Chart, Title, Tooltip, Filler } from "chart.js"
import connect from "./connect"
import { getSecondsPerKm } from "../../../../utils/getSecondsPerKm"
import { STREAM_RESOLUTION_FACTOR } from "../../../../../../constants"
import { getTimeSeries } from "../../../../utils/getTimeSeries"
import { getOptions } from "./chartOptions"
Chart.register(CategoryScale, LogarithmicScale, PointElement, LineElement, Title, Tooltip, Filler)

export const LineChart = ({ currentActivityStream }: any) => {
	if (currentActivityStream.distance) {
		const length = parseInt(currentActivityStream.distance.original_size) / STREAM_RESOLUTION_FACTOR
		const time = getTimeSeries(length)
		const streamData = getSecondsPerKm(currentActivityStream.distance.data)
		const data = {
			labels: time,
			datasets: [
				{
					fill: "start",
					label: "Distance",
					data: streamData,
					backgroundColor: "rgba(102, 61, 255, 0.7)",
					pointRadius: 0,
					pointHitRadius: 20,
					lineTension: 0.2,
				},
			],
		}
		const options = getOptions(length, Math.min(...streamData))
		return (
			<div>
				<Line className="pb-4" options={options as any} data={data} />
			</div>
		)
	}
	return null
}

export default connect(LineChart)
