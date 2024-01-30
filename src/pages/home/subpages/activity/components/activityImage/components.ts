import styled from "@emotion/styled"

export const RoundedImage = styled("img")`
	border-radius: var(--bs-border-radius);
	width: 100%;
	@media (min-width: 992px) {
		width: 550px;
	}
`
export const ImageContainer = styled("div")`
	@media (max-width: 991px) {
		margin-bottom: 1.5rem;
	}
`
