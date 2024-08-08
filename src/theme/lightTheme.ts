import { Theme } from "@emotion/react"

export default {
	name: "light",
	background: "#F5F5F5",
	text: "rgb(0,0,0)",
	primaryGradient: "linear-gradient(0deg, rgba(245, 245, 245, 0.3) 0%, rgba(102, 61, 255, 1) 100%);",
	bootstrap: {
		background: "white",
		textColor: "black",
	},
	activity: {
		backgroundImage: "none",
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
		background: "rgba(245, 245, 245, 0.5)",
	},
	popup: {
		background: "white",
		boxShadow: "0 0 0.5rem rgba(0, 0, 0, 0.1)",
	},
	spinnerBackground: "#0b1623",
} as Theme
