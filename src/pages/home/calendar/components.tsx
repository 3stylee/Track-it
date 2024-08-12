import styled from "@emotion/styled"
import { BREAKPOINTS, PAGE_PADDING, SIDEBAR_WIDTH, TITLE_BANNER_HEIGHT } from "../../../constants/constants"

export const PageContainer = styled("div")`
	width: calc(100% - ${SIDEBAR_WIDTH});
	padding: ${PAGE_PADDING};
	padding-top: calc(${TITLE_BANNER_HEIGHT} + ${PAGE_PADDING});
	margin-left: calc(${SIDEBAR_WIDTH} - 0.375rem);

	@media (max-width: ${BREAKPOINTS.UP.MD}) {
		width: 100%;
		margin-left: 0;
	}
`
export const PageTitle = styled("h4")`
	margin-bottom: 0;

	@media (max-width: ${BREAKPOINTS.UP.MD}) {
		font-size: 1.25rem;
	}
`

export const Title = styled("div")`
	height: 5%;
	display: flex;
	color: ${({ theme }) => theme.bootstrap.textColor};
	justify-content: space-between;
	align-items: center;
	margin-bottom: 1rem;
`
