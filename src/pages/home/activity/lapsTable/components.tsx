import styled from "@emotion/styled"
import { BREAKPOINTS } from "../../../../constants/constants"
import { Card, Table } from "react-bootstrap"

export const CardContainer = styled(Card)`
	height: 100%;
	background-color: ${({ theme }) => theme.currentActivity.cardBackground};
	color: ${({ theme }) => theme.text};
	backdrop-filter: ${({ theme }) => theme.currentActivity.cardBlur};
	padding: 0.5rem;
	overflow-x: auto;

	@media (max-width: ${BREAKPOINTS.UP.LG}) {
		margin-bottom: 1.5rem;
	}
`
export const CardHeader = styled("div")`
	margin-top: 1rem;
	text-align: center;
	font-size: 0.8rem;
	font-weight: bold;
`
export const StyledTable = styled(Table)`
	margin-bottom: 0;
`

export const TableHeader = styled("thead")`
	& th {
		font-weight: 400;
		border: none;

		@media (max-width: ${BREAKPOINTS.UP.SM}) {
			font-size: 0.75rem;
		}
	}
	& th:first-of-type {
		padding-left: 1rem;
		border-top-left-radius: var(--bs-border-radius);
		border-bottom-left-radius: var(--bs-border-radius);
	}
	& th:last-child {
		border-top-right-radius: var(--bs-border-radius);
		border-bottom-right-radius: var(--bs-border-radius);
	}
`
export const TableRow = styled("tr")<{ session: boolean; muted: boolean }>`
	& td {
		vertical-align: middle;
		border: none;
		color: ${({ muted, session }) => (session && muted ? "grey" : "")};

		@media (max-width: ${BREAKPOINTS.UP.SM}) {
			font-size: 0.75rem;
		}
	}

	& > :first-of-type {
		padding-left: 1rem;
		border-top-left-radius: var(--bs-border-radius);
		border-bottom-left-radius: var(--bs-border-radius);
	}

	& > :last-child {
		border-top-right-radius: var(--bs-border-radius);
		border-bottom-right-radius: var(--bs-border-radius);
	}
`

export const HeadingText = styled("div")`
	display: flex;
	align-items: center;
	gap: 0.25rem;
`
