import styled from "@emotion/styled"
import { SIDEBAR_WIDTH, TITLE_BANNER_HEIGHT } from "../../constants"

export const SidebarContainer = styled("div")<{ sidebarExpanded: boolean }>`
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
export const IconContainer = styled("li")<{ selected?: boolean }>`
	padding: 1rem;
	text-align: center;
	transition: background-color 0.3s;
	${({ selected }) => selected && "box-shadow: inset -2px 0 0 0 var(--bs-primary);"}

	&:hover {
		background-color: ${({ theme }) => theme.sidebar.iconHover};
	}
`

export const SidebarButton = styled("div")`
	&:hover {
		cursor: pointer;
	}
`
