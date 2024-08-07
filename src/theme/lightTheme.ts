import { Theme } from "@emotion/react"

export default {
	name: "light",
	background: "#F5F5F5",
	text: "rgb(0,0,0)",
	bootstrap: {
		background: "white",
		textColor: "black",
	},
	activity: {
		backgroundImage: "linear-gradient(rgba(105, 35, 135, 0.1) 70%, rgba(75, 35, 95, 0.2), rgba(35, 48, 135, 0.4))",
	},
	sidebar: {
		iconHover: "rgba(0, 0, 0, 0.15)",
	},
	labelledStats: {
		divider: "grey",
		accent: "var(--bs-primary)",
	},
	calendar: {
		emptyCell: "rgba(209, 209, 209, 0.3)",
		dayCell: "var(--bs-body-bg)",
		borderColor: "#dddddd",
	},
	datePicker: {
		background: "#e7edff",
	},
	popup: {
		background: "white",
		boxShadow: "0 0 0.5rem rgba(0, 0, 0, 0.1)",
	},
	spinnerBackground: "#0b1623",
} as Theme
