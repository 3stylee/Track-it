import styled from "@emotion/styled"
import { BREAKPOINTS, PAGE_PADDING, PAGE_PADDING_MOBILE } from "../../../../constants/constants"

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
	& th {
		vertical-align: middle;
	}
`
