import styled from "@emotion/styled"

export const ColouredContainer = styled("div")`
	background-color: #fc4c02;
	height: calc(100vh - 5rem);
	padding-top: 5rem;
	padding-left: 3rem;
	padding-right: 3rem;
	width: 100%;
`

export const PageContainer = styled("div")`
	display: flex;

	@media (max-width: 992px) {
		display: block;
	}
`
