import styled from "@emotion/styled"
import { CardBody } from "react-bootstrap"

export const Body = styled(CardBody)`
	padding-top: 0;
	overflow-y: scroll;
	@media (min-width: 1200px) {
		height: 15.25rem;
	}
	@media (max-width: 1199px) {
		max-height: 24rem;
	}
`
export const CardHeader = styled("h4")`
	padding: 0.788rem;
	margin-bottom: 0;
`

export const TableHeader = styled("thead")`
	height: 4rem;
	& th {
		font-weight: 400;
		color: var(--bs-primary);
		vertical-align: middle;
		border: none;
	}
`

export const TableRow = styled("tr")`
	height: 4rem;
	& td {
		vertical-align: middle;
		border: none;
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
