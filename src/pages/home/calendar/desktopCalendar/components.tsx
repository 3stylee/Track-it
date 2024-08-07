import styled from "@emotion/styled"
import { BREAKPOINTS } from "../../../../constants/constants"

export const DesktopCalendarContainer = styled("div")`
	@media (max-width: ${BREAKPOINTS.UP.MD}) {
		display: none;
	}
`

export const DayHeader = styled("div")`
	display: flex;
	height: 2rem;
	border-right: 1px solid ${({ theme }) => theme.calendar.borderColor};
	border-bottom: 1px solid ${({ theme }) => theme.calendar.borderColor};
	border-top: 1px solid ${({ theme }) => theme.calendar.borderColor};
	color: ${({ theme }) => theme.bootstrap.textColor};
	justify-content: center;
	align-items: center;
	font-weight: bold;
	background-color: ${({ theme }) => theme.calendar.dayCell};
`
export const GridContainer = styled("div")`
	display: grid;
	grid-template-columns: repeat(7, 1fr);
	border-left: 1px solid ${({ theme }) => theme.calendar.borderColor};
`
export const EmptyCell = styled("div")`
	border-right: 1px solid ${({ theme }) => theme.calendar.borderColor};
	border-bottom: 1px solid ${({ theme }) => theme.calendar.borderColor};
	background-color: ${({ theme }) => theme.calendar.emptyCell};
`
