import "@emotion/react"

declare module "@emotion/react" {
	export interface Theme {
		name: string
		background: string
		text: string
		primaryGradient: string
		bootstrap: {
			background: string
			backgroundColor: string
			textColor: string
		}
		athleteActivities: {
			cardBackgroundImage: string
			datePickerBackground: string
		}
		currentActivity: {
			cardBackground: string
			cardBlur: string
		}
		sidebar: {
			iconHover: string
		}
		labelledStats: {
			divider: string
			accent: string
		}
		calendar: {
			eventBackground: string
			emptyCell: string
			dayCell: string
			borderColor: string
		}
		popup: {
			background: string
			boxShadow: string
		}
		spinnerBackground: string
	}
}
