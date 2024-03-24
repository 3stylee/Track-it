import { ACTIVITY_GRAPH_TIME_LABELS, THEMES } from "../../../../../../../constants/constants"

export const getAltitudeOptions = (length: number, theme: string, max: number, eGain: number) => {
	const modFactor = Math.floor(length / ACTIVITY_GRAPH_TIME_LABELS)
	return {
		responsive: true,
		plugins: {
			legend: {
				display: false,
			},
			tooltip: {
				enabled: true,
				callbacks: {
					label: (tooltipItem: any) => {
						return "Altitude: " + tooltipItem.parsed.y + "m"
					},
				},
			},
			title: {
				display: true,
				text: "Altitude",
				color: `${theme === THEMES.DARK ? "white" : "black"}`,
			},
			annotation: {
				annotations: {
					elevationGain: {
						type: "line",
						scaleID: "y",
						value: max,
						borderColor: `${theme === THEMES.DARK ? "white" : "black"}`,
						borderDash: [5, 5],
						borderWidth: 2,
						label: {
							display: true,
							position: "end",
							color: "white",
							content: `Total Elevation Gain: ${eGain}m`,
						},
					},
				},
			},
		},
		scales: {
			x: {
				type: "category",
				grid: {
					display: false,
				},
				ticks: {
					autoSkip: false,
					callback(val: number, index: number): string {
						if (index % modFactor === 0) {
							// @ts-ignore
							return this.getLabelForValue(val)
						}
						return ""
					},
					color: `${theme === THEMES.DARK ? "white" : "black"}`,
				},
			},
			y: {
				type: "linear",
				grid: {
					display: false,
				},
				ticks: {
					maxTicksLimit: 5,
					color: `${theme === THEMES.DARK ? "white" : "black"}`,
				},
			},
		},
	}
}
