import styled from "@emotion/styled"
import { BREAKPOINTS } from "../../../../constants/constants"

export const StyledRow = styled("tr")`
	cursor: pointer;

	& td {
		vertical-align: middle;
		height: 60px;
	}

	@media (max-width: ${BREAKPOINTS.UP.LG}) {
		font-size: 0.875rem;
	}

	@media (max-width: ${BREAKPOINTS.UP.SM}) {
		font-size: 0.75rem;
	}
`
export const ActivityMap = styled("img")`
	margin-right: 1rem;
	height: 50px;
	width: 50px;
	border-radius: 0.313rem;
`
export const StyledSpan = styled("span")`
	white-space: nowrap;
`
export const ImageRow = styled("td")`
	max-width: 12rem;
	overflow: hidden;
	text-overflow: ellipsis;
	text-wrap: nowrap;

	@media (max-width: ${BREAKPOINTS.UP.SM}) {
		max-width: 8rem;
	}
	@media (max-width: ${BREAKPOINTS.UP.XS}) {
		max-width: 5rem;
	}
`
