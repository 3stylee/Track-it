import React from "react"
import { StyledCard, StyledHeader } from "./components"
import QuickStats from "../quickStats"
import { useTheme } from "@emotion/react"

export const TitleHeader = () => {
	const theme = useTheme()
	return (
		<StyledCard className={`card text-${theme.bootstrap.textColor} bg-${theme.bootstrap.background}`}>
			<StyledHeader>
				<h3 className={`m-0 text-${theme.bootstrap.textColor}`}>Dashboard</h3>
				<QuickStats />
			</StyledHeader>
		</StyledCard>
	)
}
