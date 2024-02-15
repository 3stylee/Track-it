import { Units } from "../../../../../../../config/models"
import { ACTIVITY_GRAPH_TIME_LABELS, THEMES } from "../../../../../../../constants"
import { getMinsFromSeconds } from "../../../../../utils/getMinsFromSeconds"

export const getPaceOptions = (length: number, theme: string, min: number, average: number, units: Units) => {
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
						return `Pace: ${getMinsFromSeconds(tooltipItem.parsed.y)}/ ${units.unitString}`
					},
				},
			},
			title: {
				display: true,
				text: "Pace",
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
							content: `Average: ${getMinsFromSeconds(average)} /${units.unitString}`,
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
				// top of scale is 15s faster than fastest pace (rounded to nearest 10s)
				min: Math.round((min - 15) / 10) * 10,
				max: units.unitString === "mi" ? 900 : 600,
				type: "logarithmic",
				grid: {
					display: false,
				},
				ticks: {
					callback: (value: number) => getMinsFromSeconds(value),
					maxTicksLimit: 5,
					color: `${theme === THEMES.DARK ? "white" : "black"}`,
				},
				reverse: true,
			},
		},
	}
}
