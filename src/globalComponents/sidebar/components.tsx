import styled from "@emotion/styled"
import { BREAKPOINTS, SIDEBAR_WIDTH, TITLE_BANNER_HEIGHT } from "../../constants/constants"
import { motion } from "framer-motion"

export const SidebarContainer = styled("div")<{ sidebarExpanded: boolean }>`
	width: ${SIDEBAR_WIDTH};
	padding: calc(${TITLE_BANNER_HEIGHT} + 0.5rem) 0 0 0.5rem;
	color: ${({ theme }) => theme.text};
	transition: margin-left 0.3s;
	position: fixed;
	height: 100%;
	z-index: 100;

	@media (max-width: ${BREAKPOINTS.UP.MD}) {
		margin-left: ${({ sidebarExpanded }) => (sidebarExpanded ? "0" : `-${SIDEBAR_WIDTH}`)};
		z-index: 100;
		padding-right: 0.5rem;
		background-color: ${({ theme }) => theme.background};
		transition: margin-left 0.3s;
		box-shadow: ${({ sidebarExpanded }) => (sidebarExpanded ? "2px 0 5px rgba(0, 0, 0, 0.5)" : "none")};
	}
`
export const StyledList = styled("ul")`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	height: 95%;
`

export const IconContainer = styled("li")<{ selected?: boolean }>`
	color: ${({ selected }) => selected && "white"};
	background-color: ${({ theme, selected }) => (selected ? "var(--bs-primary)" : theme.sidebar.iconBackground)};
	backdrop-filter: blur(10px);
	margin-top: 0.5rem;
	cursor: pointer;
	border-radius: 50%;
	border: 1px solid ${({ theme, selected }) => (selected ? "var(--bs-primary)" : theme.calendar.borderColor)};
	padding: 1rem;
	text-align: center;
	transition: background-color 0.3s, color 0.3s, border 0.6s;

	&:hover {
		background-color: ${({ theme }) => theme.sidebar.iconHover};
	}
`

export const SelectedBar = styled(motion.div)`
	border-radius: 50%;
	margin-left: -3.64rem;
	margin-top: 0.5rem;
	height: 3.625rem;
	width: 3.625rem;
	z-index: -2;
	background-color: var(--bs-primary);
`
export const StyledDiv = styled("div")`
	display: flex;
	align-items: center;
	color: ${({ theme }) => theme.text};
`
