import styled from "@emotion/styled"

export const PageContainer = styled("div")`
	padding: 0 3rem;
	width: 100%;
	overflow-y: scroll;

	@media (max-width: 768px) {
		padding: 0;
	}
`
export const ImageAndLapsContainer = styled("div")`
	@media (min-width: 1200px) {
		display: flex;
		gap: 3rem;
		padding: 3rem 0;
	}
`
