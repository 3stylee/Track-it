export const options = {
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
			text: "Mileage",
		},
	},
	scales: {
		x: {
			min: 0,
			grid: {
				display: true,
			},
		},
		y: {
			min: 0,
			grid: {
				display: false,
			},
		},
	},
}

export default options
