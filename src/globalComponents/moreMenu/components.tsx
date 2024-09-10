import styled from "@emotion/styled"
import { BREAKPOINTS } from "../../constants/constants"

export const MenuContainer = styled("div")<{ top: number; left?: number; right?: number }>`
	position: absolute;
	top: ${({ top }) => top}rem;
	right: ${({ right }) => right}rem;
	left: ${({ left }) => left}rem;
	z-index: 2;
	background-color: ${({ theme }) => theme.popup.background};
	border: 1px solid rgb(77, 81, 84);
	border-radius: 0.5rem;
	box-shadow: ${({ theme }) => theme.popup.boxShadow};
	cursor: pointer;
`

export const MenuOption = styled("div")`
	font-size: 0.875rem;
	display: flex;
	align-items: center;
	padding: 0.5rem 2rem 0.5rem 1rem;
	gap: 0.5rem;
	transition: background-color 0.3s;
	color: ${({ theme }) => theme.text};

	@media (max-width: ${BREAKPOINTS.UP.SM}) {
		font-size: 1rem;
		padding-right: 5rem;
	}

	&:hover {
		background-color: ${({ theme }) => theme.sidebar.iconHover};
	}

	&:first-of-type {
		border-top-left-radius: 0.5rem;
		border-top-right-radius: 0.5rem;
	}

	&:last-of-type {
		border-bottom-left-radius: 0.5rem;
		border-bottom-right-radius: 0.5rem;
	}
`
export const DeleteOption = styled(MenuOption)`
	color: var(--bs-danger);
`
