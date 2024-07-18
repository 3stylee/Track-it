import styled from "@emotion/styled"
import { Button } from "react-bootstrap"
import { BREAKPOINTS } from "../../../../constants/constants"

// Base styled component with common styles
const ChevronBase = styled.div<{ disabled: boolean }>`
	height: 2.375rem;
	width: 2.375rem;
	color: white;
	padding: 0.5rem;
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
	@media (max-width: ${BREAKPOINTS.UP.MD}) {
		font-size: 0.75rem;
		height: 2rem;
	}
`
