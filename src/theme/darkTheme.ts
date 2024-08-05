import { Theme } from "@emotion/react"

export default {
	name: "dark",
	background: "#0b1623",
	text: "rgb(255,255,255)",
	bootstrap: {
		background: "dark",
		textColor: "white",
	},
	sidebar: {
		iconHover: "rgba(255, 255, 255, 0.15)",
	},
	labelledStats: {
		divider: "white",
		accent: "#b9ace6",
	},
	calendar: {
		emptyCell: "rgba(77, 81, 84, 0.4)",
		dayCell: "#212529",
		borderColor: "rgb(77, 81, 84)",
	},
	datePicker: {
		background: "#4461b9",
	},
	popup: {
		background: "var(--bs-dark)",
		boxShadow: "none",
	},
	spinnerBackground: "white",
} as Theme
