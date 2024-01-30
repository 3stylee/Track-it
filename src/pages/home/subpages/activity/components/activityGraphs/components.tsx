import styled from "@emotion/styled"

export const CenteredDiv = styled("div")`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100%;
`
export const GraphsContainer = styled("div")`
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
	width: 100%;
	@media (min-width: 992px) {
		gap: 1.5rem;
	}
`
