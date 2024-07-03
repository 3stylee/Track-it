import React, { useState } from "react"
import { IconContainer, SelectedBar, SidebarContainer } from "./components"
import connect from "./connect"
import { SIDEBAR_ICONS, THEMES } from "../../constants/constants"
import { useTheme } from "@emotion/react"
import { Link, useLocation } from "react-router-dom"
import SettingsMenu from "../settingsMenu"
import { LogoutScreen } from "../logoutScreen"
import { getUrlPath } from "../../utils/getUrlPath"
import { Calendar, Clock, Grid, Home, LogOut, Moon, Settings } from "react-feather"

const iconMap = {
	home: Home,
	grid: Grid,
	clock: Clock,
	calendar: Calendar,
} as any

export const Sidebar = ({ sidebarExpanded, toggleTheme }: any) => {
	const theme = useTheme()
	const [showSettings, setShowSettings] = useState(false)
	const [showLogout, setShowLogout] = useState(false)
	const location = useLocation()
	return (
		<>
			<SidebarContainer
				sidebarExpanded={sidebarExpanded}
				className={`flex-column text-${theme.bootstrap.textColor} bg-${theme.bootstrap.background}`}>
				<ul className="nav flex-column">
					{SIDEBAR_ICONS.map(({ path, icon }) => {
						const selected = path === getUrlPath(location)
						const IconComponent = iconMap[icon]
						return (
							<Link to={path} className={`text-${theme.bootstrap.textColor}`} key={icon}>
								<div className="d-flex">
									<IconContainer>
										<IconComponent />
									</IconContainer>
									{selected && <SelectedBar layoutId="underline" />}
								</div>
							</Link>
						)
					})}
					<hr className="mx-3" />
					<IconContainer
						onClick={() => {
							setShowSettings(!showSettings)
						}}>
						<Settings />
					</IconContainer>
					<IconContainer
						onClick={() => {
							setShowLogout(!showLogout)
						}}>
						<LogOut />
					</IconContainer>
					<IconContainer onClick={toggleTheme}>
						<Moon fill={theme.name === THEMES.DARK ? "white" : undefined} />
					</IconContainer>
				</ul>
			</SidebarContainer>
			<SettingsMenu show={showSettings} handleClose={() => setShowSettings(false)} />
			<LogoutScreen
				show={showLogout}
				handleClose={() => {
					setShowLogout(false)
				}}
			/>
		</>
	)
}

export default connect(Sidebar)
