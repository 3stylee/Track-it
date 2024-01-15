import React from "react"
import { StyledHeader } from "./components"
import QuickStats from "../quickStats"

export const TitleHeader = () => {
	return (
		<StyledHeader>
			<h3 className="m-0">Dashboard</h3>
			<QuickStats />
		</StyledHeader>
	)
}
