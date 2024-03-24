import { ACTIVITY_GRAPH_TIME_LABELS, THEMES } from "../../../../../../../constants/constants"

export const getHeartrateOptions = (length: number, theme: string, average: number) => {
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
						return "Heart Rate: " + tooltipItem.parsed.y + " bpm"
					},
				},
			},
			title: {
				display: true,
				text: "Heart Rate",
				color: `${theme === THEMES.DARK ? "white" : "black"}`,
			},
			annotation: {
				annotations: {
					averageLine: {
						type: "line",
						scaleID: "y",
						value: average,
						borderColor: `${theme === THEMES.DARK ? "white" : "black"}`,
						borderDash: [5, 5],
						borderWidth: 2,
						label: {
							display: true,
							position: "end",
							color: "white",
							content: `Average: ${average.toFixed(0)} bpm`,
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
				type: "logarithmic",
				grid: {
					display: false,
				},
				ticks: {
					color: `${theme === THEMES.DARK ? "white" : "black"}`,
					maxTicksLimit: 8,
				},
			},
		},
	}
}
