import styled from "@emotion/styled"

export const PageContainer = styled("div")`
	display: flex;
	height: calc(100vh - 5rem);

	@media (max-width: 992px) {
		display: block;
		height: 100%;
	}
`
