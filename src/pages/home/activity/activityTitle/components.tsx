import styled from "@emotion/styled"
import { Card, Col } from "react-bootstrap"

export const Title = styled("div")`
	text-align: center;
`
export const StyledCard = styled(Card)`
	@media (max-width: 991px) {
		margin-bottom: 0.5rem;
	}
`
export const CenteredCol = styled(Col)`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`
export const StatsContainer = styled("div")`
	margin-top: 7rem;

	@media (max-width: 1200px) {
		margin-top: 3rem;
	}

	@media (max-width: 991px) {
		margin-bottom: 1rem;
	}
`
