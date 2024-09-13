import React from "react"
import connect from "./connect"
import { Zone } from "../../../../models/state"
import { Body, ColourSquare, Key, StyledCard, StyledDonut, ZoneKeys } from "./components"
import { CardHeader, CardTitle } from "react-bootstrap"
import { Doughnut } from "react-chartjs-2"
import { ArcElement, Chart } from "chart.js"
import { HR_ZONE_COLORS, HR_ZONES } from "../../../../constants/constants"
import { TextPlaceholder } from "../../../../globalComponents/placeholderUI/components"
import { useTheme } from "@emotion/react"

interface HRZonesProps {
	zones: Zone[]
	loading: boolean
}

Chart.register(ArcElement)

const HRZones = ({ zones, loading }: HRZonesProps) => {
	const theme = useTheme()
	const labels = zones.map((_, index) => `Zone ${index + 1}`)
	const dataValues = zones.map((zone) => zone.max)
	const newDataValues = loading ? [1] : [...dataValues.slice(0, 4), 220]
	const data = {
		labels,
		datasets: [
			{
				label: "Zone",
				data: newDataValues,
				backgroundColor: loading
					? [theme.loading.placeholderBackground]
					: [
							"rgba(255, 99, 132, 0.4)",
							"rgba(54, 162, 235, 0.4)",
							"rgba(255, 206, 86, 0.4)",
							"rgba(75, 192, 192, 0.4)",
							"rgba(153, 102, 255, 0.4)",
					  ],
				borderColor: loading ? [theme.loading.placeholderBackground] : HR_ZONE_COLORS,
				borderWidth: 1,
			},
		],
	}

	const options = {
		responsive: true,
		maintainAspectRatio: false,
		plugins: {
			tooltip: {
				enabled: !loading,
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
					{loading
						? Array.from({ length: 5 }).map((_, i) => (
								<TextPlaceholder key={i} fontSize="0.8rem" width="6rem" />
						  ))
						: zones.map((zone, index) => (
								<Key key={index}>
									<ColourSquare color={HR_ZONE_COLORS[index]} />
									{HR_ZONES[index]}
									{index === 4 ? `: ${zone.min}+` : `: ${zone.min} - ${zone.max}`}
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
