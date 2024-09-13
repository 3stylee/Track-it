export const getOptions = (loading: boolean) => ({
	responsive: true,
	plugins: {
		legend: {
			display: false,
		},
		tooltip: {
			enabled: !loading,
		},
	},
	scales: {
		x: {
			min: 0,
			grid: {
				display: false,
			},
		},
		y: {
			display: false,
		},
	},
})
