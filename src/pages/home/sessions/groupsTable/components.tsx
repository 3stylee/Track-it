import styled from "@emotion/styled"
import { BREAKPOINTS, PAGE_PADDING, PAGE_PADDING_MOBILE, SIDEBAR_WIDTH } from "../../../../constants/constants"

export const PageTitle = styled("h3")`
	margin-bottom: ${PAGE_PADDING};
	color: ${({ theme }) => theme.text};

	@media (max-width: ${BREAKPOINTS.UP.MD}) {
		margin: ${PAGE_PADDING_MOBILE} 0;
	}
`
export const SessionCount = styled("p")`
	margin-bottom: 1rem;
	color: ${({ theme }) => theme.text};
`
export const TableContainer = styled("div")`
	overflow-x: hidden;
	padding-top: 7.25rem;

	@media (max-width: ${BREAKPOINTS.UP.MD}) {
		padding-top: 6.75rem;
	}
`
export const FilterContainer = styled("div")`
	display: flex;
	justify-content: space-between;
	align-items: center;
`

export const SortableHeader = styled("div")`
	display: flex;
	align-items: center;
	cursor: pointer;
`

export const StyledRow = styled("tr")`
	@media (max-width: ${BREAKPOINTS.UP.SM}) {
		font-size: 0.75rem;
	}
	& th {
		vertical-align: middle;
	}
`
export const Header = styled("div")`
	margin-top: -${PAGE_PADDING};
	padding-top: ${PAGE_PADDING};
	position: fixed;
	width: calc(100% - ${SIDEBAR_WIDTH} - (2 * ${PAGE_PADDING}));
	background-color: ${({ theme }) => theme.background};

	@media (max-width: ${BREAKPOINTS.UP.MD}) {
		margin-top: -${PAGE_PADDING_MOBILE};
		padding-top: ${PAGE_PADDING_MOBILE};
		width: calc(100% - (2 * ${PAGE_PADDING_MOBILE}));
	}
`
