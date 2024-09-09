import styled from "@emotion/styled"
import { Card } from "react-bootstrap"

export const StyledCard = styled(Card)`
	background-color: ${({ theme }) => theme.bootstrap.backgroundColor};
	color: ${({ theme }) => theme.text};
	height: 100%;
`
export const Body = styled("div")`
	padding: 1rem;
	height: 100%;
`
