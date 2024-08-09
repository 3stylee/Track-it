import styled from "@emotion/styled"
import { Card } from "react-bootstrap"

export const StyledCard = styled(Card)`
	background-color: ${({ theme }) => theme.bootstrap.backgroundColor};
	color: ${({ theme }) => theme.bootstrap.textColor};
`

export const CardBody = styled("div")`
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	text-align: right;
`
export const CardHeader = styled("div")`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: center;
	padding: 0.5rem;
`
export const GraphTitle = styled("h5")`
	margin: 0;
`
