import styled from "@emotion/styled"
import { SIDEBAR_WIDTH, TITLE_BANNER_HEIGHT } from "../../constants"

export const PageContainer = styled("div")`
	padding-top: ${TITLE_BANNER_HEIGHT};
	padding-left: ${SIDEBAR_WIDTH};
	display: flex;
	height: 100vh;
	background-color: ${({ theme }) => theme.background};

	@media (max-width: 768px) {
		display: block;
		height: 100%;
		padding-left: 0;
	}
`
