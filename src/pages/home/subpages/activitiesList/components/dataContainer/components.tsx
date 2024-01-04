import styled from "@emotion/styled"

export const StyledContainer = styled("div")`
	margin-top: 2rem;
	height: calc(100% - 4rem);

	@media (max-width: 768px) {
		padding: 0;
	}
`

export const StyledCard = styled("div")`
	height: 100%;
	@media (min-width: 769px) {
		overflow-y: scroll;
	}
`
