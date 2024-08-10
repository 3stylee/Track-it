import styled from "@emotion/styled"
import { BREAKPOINTS, PAGE_PADDING, PAGE_PADDING_MOBILE, SIDEBAR_WIDTH } from "../../../../constants/constants"

export const PageTitle = styled("h4")`
	margin-bottom: 0;
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
	padding-top: 4rem;

	@media (max-width: ${BREAKPOINTS.UP.MD}) {
		padding-top: 3rem;
	}

	@media (max-width: 486px) {
		padding-top: 6rem;
	}
`
export const FilterContainer = styled("div")`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: ${PAGE_PADDING};
	flex-wrap: wrap;
	gap: 0.5rem;

	@media (max-width: ${BREAKPOINTS.UP.MD}) {
		margin-bottom: ${PAGE_PADDING_MOBILE};
	}
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
export const NoSessions = styled("div")`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 80vh;
	flex-direction: column;
	gap: 1rem;
	color: ${({ theme }) => theme.text};
`
