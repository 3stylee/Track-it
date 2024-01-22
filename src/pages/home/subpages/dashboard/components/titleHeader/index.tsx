import React, { useContext } from "react"
import { StyledHeader } from "./components"
import QuickStats from "../quickStats"
import themeContext from "../../../../../../theme/themeContext"
import { THEMES } from "../../../../../../constants"

export const TitleHeader = () => {
	const { theme } = useContext(themeContext)
	return (
		<StyledHeader>
			<h3 className={`m-0 ${theme === THEMES.DARK && "text-white"}`}>Dashboard</h3>
			<QuickStats />
		</StyledHeader>
	)
}
