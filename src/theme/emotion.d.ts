import "@emotion/react"

declare module "@emotion/react" {
	export interface Theme {
		name: string
		background: string
		text: string
		primaryGradient: string
		bootstrap: {
			background: string
			textColor: string
		}
		activity: {
			backgroundImage: string
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
		datePicker: {
			background: string
		}
		popup: {
			background: string
			boxShadow: string
		}
		spinnerBackground: string
	}
}
