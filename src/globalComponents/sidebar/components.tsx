import styled from "@emotion/styled"
import { BREAKPOINTS, SIDEBAR_WIDTH, TITLE_BANNER_HEIGHT } from "../../constants/constants"
import { motion } from "framer-motion"

export const SidebarContainer = styled("div")<{ sidebarExpanded: boolean }>`
	width: ${SIDEBAR_WIDTH};
	padding-top: ${TITLE_BANNER_HEIGHT};
	box-shadow: 2px 0 5px rgba(0, 0, 0, 0.5);
	transition: margin-left 0.3s;
	position: fixed;
	height: 100%;
	z-index: 100;

	@media (max-width: ${BREAKPOINTS.UP.MD}) {
		margin-left: ${({ sidebarExpanded }) => (sidebarExpanded ? "0" : `-${SIDEBAR_WIDTH}`)};
		z-index: 3;
		transition: margin-left 0.3s;
		box-shadow: none;
	}
`
export const IconContainer = styled("li")`
	cursor: pointer;
	padding: 1rem;
	text-align: center;
	transition: background-color 0.3s;

	&:hover {
		background-color: ${({ theme }) => theme.sidebar.iconHover};
	}
`

export const SelectedBar = styled(motion.div)`
	margin-left: -0.125rem;
	height: 3.625rem;
	width: 0.125rem;
	background-color: var(--bs-primary);
`
