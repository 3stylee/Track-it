import React, { useContext } from "react"
import { THEMES } from "../../constants"
import themeContext from "../../theme/themeContext"

interface CardProps {
	cardHeader?: React.ReactNode
	styles?: object
	children: React.ReactNode
}

export const Card = ({ cardHeader, styles, children }: CardProps) => {
	const { theme } = useContext(themeContext)
	return (
		<div className={`card ${theme === THEMES.DARK && "text-white bg-dark"}`} style={styles}>
			{cardHeader}
			<div className="card-body">{children}</div>
		</div>
	)
}
