import styled from "@emotion/styled"

export const CardBody = styled("div")`
	overflow-y: auto;
	@media (min-width: 1200px) {
		height: 13.25rem;
	}
	@media (max-width: 1199px) {
		max-height: 30rem;
	}
`
export const CardContainer = styled("div")`
	@media (max-width: 991px) {
		margin-bottom: 1.5rem;
	}
`
export const CardHeader = styled("div")`
	margin-top: 1rem;
	text-align: center;
	font-size: 0.8rem;
	font-weight: bold;
`

export const TableHeader = styled("thead")`
	& th {
		font-weight: 400;
		border: none;
	}
`
export const TableRow = styled("tr")<{ session: boolean; muted: boolean }>`
	& td {
		vertical-align: middle;
		border: none;
		color: ${({ muted, session }) => (session && muted ? "grey" : "")};
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
