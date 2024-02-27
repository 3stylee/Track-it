import styled from "@emotion/styled"
import { DayPicker } from "react-day-picker"
import { TITLE_BANNER_HEIGHT } from "../../../../../../constants"

export const StyledDayPicker = styled(DayPicker)`
	--rdp-accent-color: var(--bs-primary);
	--rdp-background-color: ${({ theme }) => theme.datePicker.background};
	color: ${({ theme }) => theme.text};
`
export const Container = styled("div")<{ top: number }>`
	border-radius: var(--bs-border-radius);
	background-color: var(--bs-${({ theme }) => theme.bootstrap.background});
	border: 1px solid var(--bs-primary);
	position: absolute;
	top: calc(${TITLE_BANNER_HEIGHT} + 2rem + 2.375rem - ${({ top }) => top}px);
	right: 3rem;
	z-index: 100;
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
