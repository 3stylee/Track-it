import styled from "@emotion/styled"
import { Card, CardBody } from "react-bootstrap"
import { BREAKPOINTS } from "../../../../constants/constants"

export const StyledCard = styled(Card)`
	height: 100%;
	background-color: ${({ theme }) => theme.bootstrap.backgroundColor};
	color: ${({ theme }) => theme.text};
`

export const Body = styled(CardBody)`
	padding-top: 0;
	overflow-y: auto;
	@media (min-width: ${BREAKPOINTS.DOWN.XL}) {
		height: 15.25rem;
	}
	@media (max-width: ${BREAKPOINTS.UP.XL}) {
		max-height: 24rem;
	}
	@media (max-width: ${BREAKPOINTS.UP.LG}) {
		max-height: 100%;
	}
`
export const CardHeader = styled("h5")`
	padding: 1.32rem 0.25rem;
	margin-bottom: 0;
`

export const TableHeader = styled("thead")`
	height: 2rem;
	& th {
		font-weight: 400;
		font-size: 0.875rem;
		color: var(--bs-primary);
		vertical-align: middle;
		border: none;

		@media (max-width: ${BREAKPOINTS.UP.SM}) {
			font-size: 0.75rem;
		}
	}
`

export const TableRow = styled("tr")`
	height: 2rem;
	cursor: pointer;
	transition: transform 0.2s;

	& td {
		font-size: 0.875rem;
		vertical-align: middle;
		border: none;
		text-wrap: nowrap;
		max-width: 10rem;
		overflow: hidden;
		text-overflow: ellipsis;

		@media (min-width: ${BREAKPOINTS.DOWN.LG}) {
			font-size: 0.75rem;
		}

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

	&:hover {
		transform: scale(1.04);
	}
`
export const NoActivities = styled("div")`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
`
