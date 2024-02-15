import React, { useState } from "react"
import { IconContainer, SettingsButton, SidebarContainer } from "./components"
import connect from "./connect"
import { SIDEBAR_ICONS } from "../../constants"
import { useTheme } from "@emotion/react"
import FeatherIcon from "feather-icons-react"
import { Link, useLocation } from "react-router-dom"
import { SettingsMenu } from "../settingsMenu"

export const Sidebar = ({ sidebarExpanded, toggleTheme }: any) => {
	const theme = useTheme()
	const [showSettings, setShowSettings] = useState(false)
	const location = useLocation()
	let urlPath = location.pathname.split("/").at(-1)
	// TODO: probably a better way to do this, works for now
	if (urlPath === "home") {
		urlPath = ""
	}
	return (
		<>
			<SidebarContainer
				sidebarExpanded={sidebarExpanded}
				className={`flex-column text-${theme.bootstrap.textColor} bg-${theme.bootstrap.background}`}>
				<ul className="nav flex-column">
					{SIDEBAR_ICONS.map((navIcon) => {
						const { path, icon } = navIcon
						return (
							<Link to={path} className={`text-${theme.bootstrap.textColor}`} key={icon}>
								<IconContainer selected={path === urlPath}>
									<FeatherIcon icon={icon} />
								</IconContainer>
							</Link>
						)
					})}
					<hr className="mx-3" />
					<SettingsButton
						onClick={() => {
							setShowSettings(!showSettings)
						}}>
						<IconContainer>
							<FeatherIcon icon="settings" />
						</IconContainer>
					</SettingsButton>
					<Link
						to="/"
						className={`text-${theme.bootstrap.textColor}`}
						onClick={() => {
							localStorage.clear()
						}}>
						<IconContainer>
							<FeatherIcon icon="log-out" />
						</IconContainer>
					</Link>
				</ul>
			</SidebarContainer>
			<SettingsMenu show={showSettings} handleClose={() => setShowSettings(false)} toggleTheme={toggleTheme} />
		</>
	)
}

export default connect(Sidebar)
