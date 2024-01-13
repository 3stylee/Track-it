import { PACE_GRAPH_TIME_LABELS } from "../../../../../../constants"
import { getMinsPerKm } from "../../../../utils/getMinsPerKm"

const formatTooltipLabel = (tooltipItem: any) => {
	const value = tooltipItem.parsed.y
	return getMinsPerKm(value)
}

export const getOptions = (length: number, min: number) => {
	const modFactor = Math.floor(length / PACE_GRAPH_TIME_LABELS)
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
				min: min - 60,
				max: 600,
				type: "logarithmic",
				grid: {
					display: false,
				},
				ticks: {
					callback: (value: number) => getMinsPerKm(value),
					maxTicksLimit: 5,
				},
				reverse: true,
			},
		},
	}
}
