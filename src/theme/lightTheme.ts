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
		gridColor: "#ddd",
	},
	spinnerBackground: "#0b1623",
} as Theme
