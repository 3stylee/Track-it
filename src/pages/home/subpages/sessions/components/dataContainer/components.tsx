import styled from "@emotion/styled"
import { Link } from "react-router-dom"

export const Container = styled("div")`
	padding: 2rem 0rem;

	@media (max-width: 768px) {
		padding: 0rem 1rem;
	}
`
export const StyledLink = styled(Link)`
	text-decoration: none;
`
