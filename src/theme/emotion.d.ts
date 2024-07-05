import "@emotion/react"

declare module "@emotion/react" {
	export interface Theme {
		name: string
		background: string
		text: string
		bootstrap: {
			background: string
			textColor: string
		}
		sidebar: {
			iconHover: string
		}
		labelledStats: {
			divider: string
			accent: string
		}
		calendar: {
			emptyCell: string
			dayCell: string
			borderColor: string
		}
		datePicker: {
			background: string
		}
		spinnerBackground: string
	}
}
