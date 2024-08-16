import styled from "@emotion/styled"
import { Card, Row } from "react-bootstrap"

export const Placeholders = styled("div")`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100%;
`

export const StyledRow = styled(Row)`
	justify-content: center;
	margin: 0 2rem;
`

export const StyledCard = styled(Card)`
	width: 15rem;
	font-size: 1rem;
	padding: 1rem;
	background-color: ${({ theme }) => theme.bootstrap.backgroundColor};
	color: ${({ theme }) => theme.text};
	margin: 0.5rem;

	&:hover {
		background-color: ${({ theme }) => theme.sidebar.iconHover};
		cursor: pointer;
	}
`
