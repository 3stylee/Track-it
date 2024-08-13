import styled from "@emotion/styled"
import { BREAKPOINTS, PAGE_PADDING, PAGE_PADDING_MOBILE, TITLE_BANNER_HEIGHT } from "../../../../constants/constants"

export const StyledContainer = styled("div")`
	height: calc(100vh - ${TITLE_BANNER_HEIGHT} - (2 * ${PAGE_PADDING}));

	@media (max-width: ${BREAKPOINTS.UP.MD}) {
		height: calc(100vh - ${TITLE_BANNER_HEIGHT} - (2 * ${PAGE_PADDING_MOBILE}));
	}
`

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

	@media (max-width: 495px) {
		justify-content: center;
	}
`

export const TableContainer = styled("div")`
	max-height: calc(100% - 4.625rem);
	overflow: scroll;
	border-radius: var(--bs-border-radius);

	@media (max-width: ${BREAKPOINTS.UP.MD}) {
		max-height: calc(100% - 3.2rem);
	}

	@media (max-width: 495px) {
		max-height: calc(100% - 6.141rem);
	}
`

export const SortableHeader = styled("div")`
	display: flex;
	align-items: center;
	cursor: pointer;
`
export const TableHeader = styled("thead")`
	position: sticky;
	top: 0;
`

export const StyledRow = styled("tr")`
	@media (max-width: ${BREAKPOINTS.UP.SM}) {
		font-size: 0.75rem;
	}
	& th {
		vertical-align: middle;
		background: ${({ theme }) => theme.calendar.eventBackground};
		backdrop-filter: blur(10px);
		color: white;
	}
`

export const Header = styled("div")`
	padding-top: calc(1.5rem - ${PAGE_PADDING});
	margin-bottom: 1.5rem;

	@media (max-width: ${BREAKPOINTS.UP.MD}) {
		padding-top: 0;
		margin-bottom: ${PAGE_PADDING_MOBILE};
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
