import { Theme } from "@emotion/react"

export default {
	name: "light",
	background: "#fbf7f5",
	text: "rgb(0,0,0)",
	bootstrap: {
		background: "white",
		textColor: "black",
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
	spinnerBackground: "#0b1623",
} as Theme
