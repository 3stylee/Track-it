import styled from "@emotion/styled"
import { Card } from "react-bootstrap"

export const Title = styled("h2")`
	font-size: 1.5rem;
	text-transform: capitalize;
	text-align: center;
`
export const StyledCard = styled(Card)`
	@media (max-width: 991px) {
		margin-bottom: 1.5rem;
	}
`
