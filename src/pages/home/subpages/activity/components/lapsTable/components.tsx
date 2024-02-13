import styled from "@emotion/styled"

export const CardBody = styled("div")`
	overflow-y: scroll;
	@media (min-width: 1200px) {
		height: 15.25rem;
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
export const TableHeader = styled("div")`
	display: flex;
	align-items: center;
	gap: 0.25rem;
`
