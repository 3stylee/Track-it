import styled from "@emotion/styled"

export const PageContainer = styled("div")`
	padding: 1.5rem 2.5rem;
	width: 100%;
	overflow-y: scroll;

	@media (max-width: 991px) {
		padding: 1.5rem;
	}
`
export const ImageContainer = styled("div")`
	@media (min-width: 992px) {
		display: flex;
		gap: 1.5rem;
		padding-bottom: 1.5rem;
	}
`
