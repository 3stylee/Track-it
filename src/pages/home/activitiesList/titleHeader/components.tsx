import styled from "@emotion/styled"
import { BREAKPOINTS, PAGE_PADDING, PAGE_PADDING_MOBILE } from "../../../../constants/constants"

export const Filters = styled("div")`
	background-color: ${({ theme }) => theme.background};
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: ${PAGE_PADDING};
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
