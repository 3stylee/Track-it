import { ACTIVITY_GRAPH_TIME_LABELS } from "../../../../../../../constants"

export const getHeartrateOptions = (length: number) => {
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
				},
			},
			y: {
				type: "logarithmic",
				grid: {
					display: false,
				},
			},
		},
	}
}
