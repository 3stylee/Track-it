import "@emotion/react"

declare module "@emotion/react" {
	export interface Theme {
		name: string
		background: string
		text: string
		secondaryText: string
		primaryGradient: string
		loading: {
			placeholderBackground: string
			placeholderGradient: string
		}
		bootstrap: {
			background: string
			backgroundColor: string
			textColor: string
		}
		athleteActivities: {
			datePickerBackground: string
		}
		currentActivity: {
			cardBackground: string
			cardBlur: string
		}
		sidebar: {
			iconHover: string
			iconBackground: string
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
