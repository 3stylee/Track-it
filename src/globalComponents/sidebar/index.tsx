import React from "react"
import { IconContainer, SidebarContainer, ThemeToggleContainer } from "./components"
import connect from "./connect"
import { SIDEBAR_ICONS, THEMES } from "../../constants"
import { useTheme } from "@emotion/react"
import FeatherIcon from "feather-icons-react"
import { Link } from "react-router-dom"

export const Sidebar = ({ sidebarExpanded, toggleTheme }: any) => {
	const theme = useTheme()
	return (
		<SidebarContainer
			sidebarExpanded={sidebarExpanded}
			className={`flex-column text-${theme.bootstrap.textColor} bg-${theme.bootstrap.background}`}>
			<ul className="nav flex-column">
				{SIDEBAR_ICONS.map((navIcon) => {
					const { path, icon } = navIcon
					return (
						<Link to={path} className={`text-${theme.bootstrap.textColor}`} key={icon}>
							<IconContainer>
								<FeatherIcon icon={icon} />
							</IconContainer>
						</Link>
					)
				})}
				<hr className="mx-3" />
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
				<ThemeToggleContainer className="form-check form-switch">
					<input
						className="form-check-input"
						type="checkbox"
						role="switch"
						id="flexSwitchCheckChecked"
						onChange={toggleTheme}
						checked={theme.name === THEMES.DARK}
					/>
				</ThemeToggleContainer>
			</ul>
		</SidebarContainer>
	)
}

export default connect(Sidebar)
