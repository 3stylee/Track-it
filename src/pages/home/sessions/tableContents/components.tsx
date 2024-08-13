import styled from "@emotion/styled"
import { BREAKPOINTS } from "../../../../constants/constants"

export const StyledRow = styled("tr")`
	cursor: pointer;
	font-size: 0.875rem;

	& td {
		vertical-align: middle;
	}

	@media (max-width: ${BREAKPOINTS.UP.SM}) {
		font-size: 0.75rem;
	}
`
export const ActivityMap = styled("img")`
	margin-right: 1rem;
	height: 40px;
	width: 40px;
	border-radius: 0.313rem;

	@media (max-width: ${BREAKPOINTS.UP.SM}) {
		height: 30px;
		width: 30px;
	}
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
export const NoResults = styled("div")`
	display: flex;
	position: absolute;
	width: 90%;
	height: 70%;
	align-items: center;
	justify-content: center;
	padding: 1rem;
`
