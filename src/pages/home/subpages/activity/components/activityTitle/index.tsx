import { useTheme } from "@emotion/react"
import React from "react"
import { Card } from "react-bootstrap"

export const ActivityTitle = () => {
	const theme = useTheme()
	return (
		<Card bg={theme.bootstrap.background} text={theme.bootstrap.textColor} className="w-100">
			<Card.Body>Hello</Card.Body>
		</Card>
	)
}
