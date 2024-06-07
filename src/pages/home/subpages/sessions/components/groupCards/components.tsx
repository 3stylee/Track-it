import styled from "@emotion/styled"
import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"

export const Container = styled("div")`
	padding: 0 2rem 2rem 2rem;
	@media (max-width: 768px) {
		padding: 0rem 1rem;
	}
`
export const StyledLink = styled(Link)`
	text-decoration: none;
`
export const StyledTitle = styled(Card.Title)`
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	overflow: hidden;
	text-overflow: ellipsis;
`
export const PageTitle = styled("h3")`
	margin-bottom: 2rem;
	color: ${({ theme }) => theme.text};
`
