import React, { useState } from "react"
import { IconContainer, SelectedBar, SidebarContainer } from "./components"
import connect from "./connect"
import { SIDEBAR_ICONS, THEMES } from "../../constants/constants"
import { useTheme } from "@emotion/react"
import FeatherIcon from "feather-icons-react"
import { Link, useLocation } from "react-router-dom"
import SettingsMenu from "../settingsMenu"
import LogoutScreen from "../logoutScreen"
import { getUrlPath } from "../../pages/home/utils/getUrlPath"

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
						return (
							<Link to={path} className={`text-${theme.bootstrap.textColor}`} key={icon}>
								<div className="d-flex">
									<IconContainer>
										<FeatherIcon icon={icon} />
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
						<FeatherIcon icon="settings" />
					</IconContainer>
					<IconContainer
						onClick={() => {
							setShowLogout(!showLogout)
						}}>
						<FeatherIcon icon="log-out" />
					</IconContainer>
					<IconContainer onClick={toggleTheme}>
						<FeatherIcon icon="moon" fill={theme.name === THEMES.DARK ? "white" : undefined} />
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
