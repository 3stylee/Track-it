import styled from "@emotion/styled"
import { SIDEBAR_WIDTH, TITLE_BANNER_HEIGHT } from "../../constants"

interface SidebarContainerProps {
	sidebarExpanded: boolean
}

export const SidebarContainer = styled("div")<SidebarContainerProps>`
	width: ${SIDEBAR_WIDTH};
	padding-top: ${TITLE_BANNER_HEIGHT};
	box-shadow: 2px 0 5px rgba(0, 0, 0, 0.5);
	transition: margin-left 0.3s;
	position: fixed;
	height: 100%;

	@media (max-width: 768px) {
		margin-left: ${({ sidebarExpanded }) => (sidebarExpanded ? "0" : `-${SIDEBAR_WIDTH}`)};
		z-index: 1;
		transition: margin-left 0.3s;
	}
`
export const IconContainer = styled("li")`
	padding: 1rem;
	text-align: center;
	transition: background-color 0.3s;
	border-radius: 0.5rem;

	&:hover {
		background-color: rgba(0, 0, 0, 0.15);
	}
`

export const ThemeToggleContainer = styled("div")`
	margin-top: 0.5rem;
	display: flex;
	justify-content: center;
`
