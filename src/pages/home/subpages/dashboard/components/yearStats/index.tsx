import { useTheme } from "@emotion/react"
import React from "react"
import { Card } from "react-bootstrap"
import { Header } from "./components"

export const YearStats = () => {
	const theme = useTheme()
	return (
		<Card bg={theme.bootstrap.background} text={theme.bootstrap.textColor}>
			<Card.Header>
				<Header>
					<h4 className="m-0">Year Stats</h4>
				</Header>
			</Card.Header>
		</Card>
	)
}
