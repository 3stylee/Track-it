import React, { useState } from "react"
import { IconContainer, SelectedBar, SidebarContainer, StyledDiv, StyledList } from "./components"
import connect from "./connect"
import { ROUTE_PATHS, SIDEBAR_ICONS, THEMES } from "../../constants/constants"
import { useTheme } from "@emotion/react"
import { Link, useLocation } from "react-router-dom"
import SettingsMenu from "../settingsMenu"
import { getUrlPath } from "../../utils/getUrlPath"
import { Calendar, Clock, Grid, Home, MessageSquare, Moon, Settings, Sun } from "react-feather"

const iconMap = {
	home: Home,
	grid: Grid,
	clock: Clock,
	calendar: Calendar,
} as any

interface SidebarProps {
	sidebarExpanded: boolean
	toggleTheme: () => void
}

export const Sidebar = ({ sidebarExpanded, toggleTheme }: SidebarProps) => {
	const theme = useTheme()
	const [showSettings, setShowSettings] = useState(false)
	const location = useLocation()
	return (
		<>
			<SidebarContainer sidebarExpanded={sidebarExpanded}>
				<StyledList className="nav">
					<Link to={ROUTE_PATHS.CHAT} className={`text-${theme.bootstrap.textColor}`}>
						<StyledDiv>
							<IconContainer selected={getUrlPath(location) === "chat"}>
								<MessageSquare />
							</IconContainer>
							{getUrlPath(location) === "chat" && <SelectedBar layoutId="underline" />}
						</StyledDiv>
					</Link>
					<div>
						{SIDEBAR_ICONS.map(({ path, icon }) => {
							const selected = path === getUrlPath(location)
							const IconComponent = iconMap[icon]
							return (
								<Link to={path} key={icon}>
									<StyledDiv>
										<IconContainer selected={selected}>
											<IconComponent />
										</IconContainer>
										{selected && <SelectedBar layoutId="underline" />}
									</StyledDiv>
								</Link>
							)
						})}
					</div>
					<StyledDiv className="flex-column">
						<IconContainer
							onClick={() => {
								setShowSettings(!showSettings)
							}}>
							<Settings />
						</IconContainer>
						<IconContainer onClick={toggleTheme}>
							{theme.name === THEMES.LIGHT ? <Moon /> : <Sun />}
						</IconContainer>
					</StyledDiv>
				</StyledList>
			</SidebarContainer>
			<SettingsMenu show={showSettings} handleClose={() => setShowSettings(false)} />
		</>
	)
}

export default connect(Sidebar)
