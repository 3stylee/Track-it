import styled from "@emotion/styled"
import { MOBILE_SIDEBAR_HEIGHT, SIDEBAR_WIDTH } from "../../constants"

interface SidebarContainerProps {
	sidebarExpanded: boolean
}

export const SidebarContainer = styled("div")<SidebarContainerProps>`
	width: ${SIDEBAR_WIDTH};
	margin-left: ${({ sidebarExpanded }) => (sidebarExpanded ? "0" : `-${SIDEBAR_WIDTH}`)};
	box-shadow: ${({ sidebarExpanded }) => (sidebarExpanded ? "2px 0 5px rgba(0, 0, 0, 0.5)" : "")};
	transition: margin-left 0.3s;
	position: fixed;
	z-index: 10;
	height: 100%;

	@media (max-width: 768px) {
		width: 100%;
		margin-left: 0;
		height: ${MOBILE_SIDEBAR_HEIGHT};
		margin-top: ${({ sidebarExpanded }) => (sidebarExpanded ? "0" : `-${MOBILE_SIDEBAR_HEIGHT}`)};
		z-index: ${({ sidebarExpanded }) => (sidebarExpanded ? "1" : "-1")};
		position: sticky;
		transition: margin-top 0.3s;
	}
`
export const LinkContainer = styled("li")`
	transition: background-color 0.3s;
	border-radius: 0.5rem;
	font-size: 1.25rem;

	&:hover {
		background-color: rgba(0, 0, 0, 0.15);
	}
`
export const SidebarIcon = styled("svg")`
	margin-right: 1rem;
	margin-bottom: 0.25rem;
`
export const ThemeToggleContainer = styled("div")`
	margin: 1rem;
	display: flex;
`
