import styled from "@emotion/styled"
import { Button } from "react-bootstrap"
import { BREAKPOINTS } from "../../../../constants/constants"

const ChevronBase = styled.div<{ disabled: boolean }>`
	height: 3rem;
	width: 3rem;
	color: white;
	padding: 0.65rem;
	border: 1px solid ${({ theme }) => theme.calendar.borderColor};
	cursor: pointer;
	background-color: var(--bs-primary);
	border-radius: var(--bs-border-radius);
	opacity: ${({ disabled }) => (disabled ? "0.65" : "1")};

	&:hover {
		background-color: #5734d9;
	}

	@media (max-width: ${BREAKPOINTS.UP.MD}) {
		height: 2rem;
		width: 2rem;
	}
`

export const ChevronPrev = ChevronBase
export const ChevronNext = ChevronBase

export const TodayButton = styled(Button)`
	height: 3rem;
	width: 5rem;
	padding: 0.75rem;
	font-size: 0.9rem;
	border: 1px solid ${({ theme }) => theme.calendar.borderColor};
	@media (max-width: ${BREAKPOINTS.UP.MD}) {
		font-size: 0.75rem;
		height: 2rem;
		width: 3rem;
	}
`
