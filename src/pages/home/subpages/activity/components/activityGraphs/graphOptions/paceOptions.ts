import { ACTIVITY_GRAPH_TIME_LABELS } from "../../../../../../../constants"
import { getMinsFromSeconds } from "../../../../../utils/getMinsFromSeconds"

const formatTooltipLabel = (tooltipItem: any) => {
	const value = tooltipItem.parsed.y
	return "Pace: " + getMinsFromSeconds(value) + "/km"
}

export const getPaceOptions = (length: number, min: number) => {
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
					label: formatTooltipLabel,
				},
			},
			title: {
				display: true,
				text: "Pace",
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
				// top of scale is 60s faster than fastest pace (rounded to nearest 10s)
				min: Math.round((min - 60) / 10) * 10,
				max: 600,
				type: "logarithmic",
				grid: {
					display: false,
				},
				ticks: {
					callback: (value: number) => getMinsFromSeconds(value) + "/km",
					maxTicksLimit: 5,
				},
				reverse: true,
			},
		},
	}
}
