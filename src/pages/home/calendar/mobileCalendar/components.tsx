import styled from "@emotion/styled"
import { motion } from "framer-motion"
import { BREAKPOINTS } from "../../../../constants/constants"

export const PageContainer = styled("div")`
	height: calc(95% - 1rem);

	@media (min-width: ${BREAKPOINTS.DOWN.MD}) {
		display: none;
	}
`

export const GridContainer = styled("div")`
	margin-top: 1rem;
	height: 50%;
	display: grid;
	grid-template-columns: repeat(7, 1fr);
	color: ${({ theme }) => theme.text};
`
export const DayCell = styled("div")<{ active?: boolean; disabled?: boolean }>`
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	height: 2.5rem;
	color: ${({ disabled, active, theme }) => {
		if (disabled) return theme.calendar.borderColor
		else if (active) return "white"
		else return theme.text
	}};
	transition: color 0.3s;
`
export const SelectedCircle = styled(motion.div)`
	position: absolute;
	height: 2.5rem;
	width: 2.5rem;
	border-radius: 50%;
	background-color: var(--bs-primary);
	z-index: -1;
`

export const DayHeader = styled(DayCell)`
	font-weight: 500;
`
