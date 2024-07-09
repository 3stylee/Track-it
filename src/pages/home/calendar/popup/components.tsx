import styled from "@emotion/styled"
import { CloseButton } from "react-bootstrap"

export const PopupContainer = styled("div")`
	position: absolute;
	background-color: ${({ theme }) => theme.background};
	border: 1px solid ${({ theme }) => theme.calendar.borderColor};
	border-radius: var(--bs-border-radius);
	padding: 0.5rem;
	min-width: 13rem;
	z-index: 10;
`
export const Close = styled(CloseButton)`
	position: absolute;
	top: 0.5rem;
	right: 0.5rem;
`
export const Activities = styled("div")`
	margin-top: 2rem;
`
