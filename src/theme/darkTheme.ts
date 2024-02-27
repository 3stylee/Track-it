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
		gridColor: "#6d6d6d",
	},
	datePicker: {
		background: "#4461b9",
	},
	spinnerBackground: "white",
} as Theme
