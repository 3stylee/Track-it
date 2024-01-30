import { ACTIVITY_GRAPH_TIME_LABELS, THEMES } from "../../../../../../../constants"

export const getHeartrateOptions = (length: number, theme: string) => {
	const modFactor = Math.floor(length / ACTIVITY_GRAPH_TIME_LABELS)

	return {
		responsive: true,
		plugins: {
			legend: {
				display: false,
			},
			tooltip: {
				enabled: true,
			},
			title: {
				display: true,
				text: "Heart Rate",
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
				type: "logarithmic",
				grid: {
					display: false,
				},
				ticks: {
					color: `${theme === THEMES.DARK ? "white" : "black"}`,
				},
			},
		},
	}
}
