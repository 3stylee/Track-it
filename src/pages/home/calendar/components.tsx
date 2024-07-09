import styled from "@emotion/styled"
import { SIDEBAR_WIDTH, TITLE_BANNER_HEIGHT } from "../../../constants/constants"

export const PageContainer = styled("div")`
	width: calc(100% - ${SIDEBAR_WIDTH});
	margin-top: ${TITLE_BANNER_HEIGHT};
	margin-left: ${SIDEBAR_WIDTH};
	height: calc(100vh - ${TITLE_BANNER_HEIGHT});
	overflow-y: auto;
	padding: 2rem;

	@media (max-width: 767px) {
		width: 100%;
		margin-left: 0;
	}
`
export const PageTitle = styled("h3")`
	margin-bottom: 0;

	@media (max-width: 767px) {
		font-size: 1.25rem;
	}
`

export const Title = styled("div")`
	display: flex;
	color: ${({ theme }) => theme.bootstrap.textColor};
	justify-content: space-between;
	align-items: center;
	margin-bottom: 1rem;
`
