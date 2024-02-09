import React from "react"
import { useTheme } from "@emotion/react"

interface CardProps {
	cardHeader?: React.ReactNode
	styles?: object
	children: React.ReactNode
}

export const Card = ({ cardHeader, styles, children }: CardProps) => {
	const theme = useTheme()
	return (
		<div className={`card text-${theme.bootstrap.textColor} bg-${theme.bootstrap.background}`} style={styles}>
			{cardHeader}
			<div className="card-body">{children}</div>
		</div>
	)
}
