import styled from "@emotion/styled"

export const Container = styled("div")`
	padding: 0 2rem 2rem 2rem;
	height: 100%;
	@media (max-width: 991px) {
		padding: 0rem 0.75rem;
	}
`

export const PageTitle = styled("h3")`
	margin-bottom: 2rem;
	color: ${({ theme }) => theme.text};
`
export const SessionCount = styled("p")`
	margin-bottom: 1rem;
	color: ${({ theme }) => theme.text};
`
export const TableContainer = styled("div")`
	height: 80%;
	overflow-y: scroll;
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
