import React, { useContext } from "react"
import { StyledCard, StyledHeader } from "./components"
import QuickStats from "../quickStats"
import themeContext from "../../../../../../theme/themeContext"
import { THEMES } from "../../../../../../constants"

export const TitleHeader = () => {
	const { theme } = useContext(themeContext)
	return (
		<StyledCard className={`card ${theme === THEMES.DARK ? "text-white bg-dark" : ""}`}>
			<StyledHeader theme={theme}>
				<h4 className={`m-0 ${theme === THEMES.DARK && "text-white"}`}>Dashboard</h4>
				<QuickStats />
			</StyledHeader>
		</StyledCard>
	)
}
