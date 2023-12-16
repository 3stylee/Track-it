import React from "react"
import { StyledHeader } from "./components"
import { DesktopSort } from "../desktopSort"

export const TitleHeader = () => {
	return (
		<StyledHeader>
			<h3>Dashboard</h3>
			<DesktopSort />
		</StyledHeader>
	)
}
