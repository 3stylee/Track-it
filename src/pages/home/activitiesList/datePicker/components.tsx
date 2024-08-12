import styled from "@emotion/styled"
import { DayPicker } from "react-day-picker"
import { BREAKPOINTS, PAGE_PADDING, PAGE_PADDING_MOBILE, TITLE_BANNER_HEIGHT } from "../../../../constants/constants"
import { Button } from "react-bootstrap"

export const StyledDayPicker = styled(DayPicker)`
	--rdp-accent-color: var(--bs-primary);
	--rdp-background-color: ${({ theme }) => theme.athleteActivities.datePickerBackground};
	color: ${({ theme }) => theme.text};
`
export const Container = styled("div")`
	border-radius: var(--bs-border-radius);
	background-color: ${({ theme }) => theme.athleteActivities.datePickerBackground};
	backdrop-filter: blur(20px);
	border: 1px solid var(--bs-primary);
	position: absolute;
	top: calc(3.125rem + ${PAGE_PADDING} + ${TITLE_BANNER_HEIGHT});
	right: ${PAGE_PADDING};
	z-index: 100;

	@media (max-width: ${BREAKPOINTS.UP.MD}) {
		top: calc(3.125rem + ${PAGE_PADDING_MOBILE} + ${TITLE_BANNER_HEIGHT});
		right: ${PAGE_PADDING_MOBILE};
	}
`
export const StyledButton = styled(Button)`
	border-radius: 1.5rem;
	padding: 0.75rem 1rem;
`

export const Footer = styled("div")`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 0.5rem;
`
export const ButtonText = styled("span")`
	display: flex;
	justify-content: space-between;
	gap: 0.5rem;
	align-items: center;
`
export const FilterButtonContainer = styled("div")`
	display: flex;
	justify-content: space-between;
	align-items: center;
`
export const ClearButton = styled("a")`
	margin-left: 1rem;
	gap: 0.25rem;
	color: ${({ theme }) => theme.text};
	text-decoration: none;
	display: flex;
	align-items: center;
	cursor: pointer;
`
