import React from "react"
import connect from "./connect"
import { Zone } from "../../../../models/state"
import { Body, StyledCard } from "./components"
import { CardHeader, CardTitle } from "react-bootstrap"
import { Doughnut } from "react-chartjs-2"
import { ArcElement, Chart } from "chart.js"

interface HRZonesProps {
	zones: Zone[]
}

Chart.register(ArcElement)

const HRZones = ({ zones }: HRZonesProps) => {
	const labels = zones.map((_, index) => `Zone ${index + 1}`)
	const dataValues = zones.map((zone) => zone.max)
	const newDataValues = [...dataValues.slice(0, 4), 220]
	const data = {
		labels,
		datasets: [
			{
				label: "Zone",
				data: newDataValues,
				backgroundColor: [
					"rgba(255, 99, 132, 0.2)",
					"rgba(54, 162, 235, 0.2)",
					"rgba(255, 206, 86, 0.2)",
					"rgba(75, 192, 192, 0.2)",
					"rgba(153, 102, 255, 0.2)",
				],
				borderColor: [
					"rgba(255, 99, 132, 1)",
					"rgba(54, 162, 235, 1)",
					"rgba(255, 206, 86, 1)",
					"rgba(75, 192, 192, 1)",
					"rgba(153, 102, 255, 1)",
				],
				borderWidth: 1,
			},
		],
	}

	const options = {
		responsive: true,
		maintainAspectRatio: false,
		plugins: {
			tooltip: {
				callbacks: {
					label: function (context: any) {
						const index = context.dataIndex
						const zone = zones[index]
						if (zone.max === -1) return `${zone.min}+ bpm`
						return `${zone.min} - ${zone.max} bpm`
					},
				},
			},
		},
	}
	return (
		<StyledCard>
			<CardHeader>
				<CardTitle className="mt-2">Heart rate zones</CardTitle>
			</CardHeader>
			<Body>
				<Doughnut options={options} data={data} />
			</Body>
		</StyledCard>
	)
}

export default connect(HRZones)
