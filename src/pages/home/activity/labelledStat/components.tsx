import styled from "@emotion/styled"
import { BREAKPOINTS } from "../../../../constants/constants"

export const StatHeader = styled("div")`
	display: flex;
	color: ${({ theme }) => theme.labelledStats.accent};
	align-items: center;
`

export const Value = styled("p")`
	font-size: 1.75rem;
	margin-bottom: 0;

	@media (max-width: ${BREAKPOINTS.UP.SM}) {
		font-size: 1.25rem;
	}
`
export const Text = styled("p")`
	font-size: 0.875rem;
	text-transform: capitalize;
	margin-bottom: 0;
`

export const Unit = styled("span")`
	font-size: 1rem;
	color: ${({ theme }) => theme.labelledStats.accent};
	text-transform: uppercase;

	@media (max-width: ${BREAKPOINTS.UP.SM}) {
		font-size: 0.75rem;
	}
`
