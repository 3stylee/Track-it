import styled from "@emotion/styled"

export const StyledContainer = styled("div")`
	padding: 1.5rem;

	@media (max-width: 768px) {
		padding: 0;
	}
`

export const StyledCard = styled("div")`
	@media (min-width: 769px) {
		height: 85vh;
		overflow-y: scroll;
	}
`
