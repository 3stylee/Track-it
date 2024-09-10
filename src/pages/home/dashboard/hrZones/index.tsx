import React from "react"
import connect from "./connect"
import { Zone } from "../../../../models/state"
import { Body, ColourSquare, Key, StyledCard, StyledDonut, ZoneKeys } from "./components"
import { CardHeader, CardTitle } from "react-bootstrap"
import { Doughnut } from "react-chartjs-2"
import { ArcElement, Chart } from "chart.js"
import { HR_ZONE_COLORS, HR_ZONES } from "../../../../constants/constants"

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
					"rgba(255, 99, 132, 0.4)",
					"rgba(54, 162, 235, 0.4)",
					"rgba(255, 206, 86, 0.4)",
					"rgba(75, 192, 192, 0.4)",
					"rgba(153, 102, 255, 0.4)",
				],
				borderColor: HR_ZONE_COLORS,
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
				<ZoneKeys>
					{zones.map((_, index) => (
						<Key key={index}>
							<ColourSquare color={HR_ZONE_COLORS[index]} />
							{HR_ZONES[index]}
						</Key>
					))}
				</ZoneKeys>
				<StyledDonut>
					<Doughnut options={options} data={data} />
				</StyledDonut>
			</Body>
		</StyledCard>
	)
}

export default connect(HRZones)
