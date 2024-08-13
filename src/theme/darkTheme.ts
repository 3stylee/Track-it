import { Theme } from "@emotion/react"

export default {
	name: "dark",
	background: "#0b1623",
	text: "rgb(255,255,255)",
	secondaryText: "lightGray",
	primaryGradient: "linear-gradient(0deg, rgba(0, 0, 0, 0.3) 0%, rgba(102, 61, 255, 1) 100%)",
	bootstrap: {
		background: "dark",
		backgroundColor: "var(--bs-dark)",
		textColor: "white",
	},
	athleteActivities: {
		datePickerBackground: "rgba(11, 22, 35, 0.5)",
	},
	currentActivity: {
		cardBackground: "rgba(11, 22, 35, 0.8)",
		cardBlur: "blur(4px)",
	},
	sidebar: {
		iconHover: "rgba(255, 255, 255, 0.15)",
		iconBackground: "rgba(11, 22, 35, 0.8)",
	},
	labelledStats: {
		divider: "white",
		accent: "#b9ace6",
	},
	calendar: {
		eventBackground: "rgba(102, 61, 255, 0.8)",
		emptyCell: "rgba(77, 81, 84, 0.4)",
		dayCell: "#212529",
		borderColor: "rgb(77, 81, 84)",
	},
	popup: {
		background: "var(--bs-dark)",
		boxShadow: "none",
	},
	spinnerBackground: "white",
} as Theme
