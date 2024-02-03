import { ACTIVITY_GRAPH_TIME_LABELS, THEMES } from "../../../../../../../constants"

export const getAltitudeOptions = (length: number, theme: string) => {
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
