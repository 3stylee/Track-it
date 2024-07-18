import styled from "@emotion/styled"
import { BREAKPOINTS, PAGE_PADDING, PAGE_PADDING_MOBILE, SIDEBAR_WIDTH } from "../../../../constants/constants"

export const Filters = styled("div")`
	position: fixed;
	background-color: ${({ theme }) => theme.background};
	width: calc(100% - ${SIDEBAR_WIDTH});
	z-index: 2;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: ${PAGE_PADDING};
	padding-bottom: 1rem;
	flex-wrap: wrap;

	@media (max-width: ${BREAKPOINTS.UP.MD}) {
		width: 100%;
		padding: ${PAGE_PADDING_MOBILE};
	}
`
export const Title = styled("h3")`
	margin: 0;
	color: ${({ theme }) => theme.text};
`
