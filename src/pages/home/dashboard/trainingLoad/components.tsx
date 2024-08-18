import styled from "@emotion/styled"
import { Badge, Card } from "react-bootstrap"
import { BREAKPOINTS } from "../../../../constants/constants"

export const StyledCard = styled(Card)`
	background-color: ${({ theme }) => theme.bootstrap.backgroundColor};
	color: ${({ theme }) => theme.text};
`

export const CardBody = styled("div")`
	display: flex;
	padding: 1rem;

	@media (max-width: ${BREAKPOINTS.UP.SM}) {
		flex-direction: column;
	}
`

export const GraphDescription = styled("div")`
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 0.5rem;
	width: 30%;

	@media (max-width: ${BREAKPOINTS.UP.SM}) {
		width: 100%;
	}
`

export const SubHeader = styled("div")`
	display: flex;
	align-items: center;
	padding: 1rem;
	padding-left: 0;
`

export const ChangePercent = styled(Badge)`
	display: flex;
	align-items: center;
	margin-left: 1rem;
`
export const InfoText = styled("p")`
	margin: 0;
	font-size: 0.8rem;

	@media (max-width: ${BREAKPOINTS.UP.SM}) {
		font-size: 0.6rem;
	}
`
