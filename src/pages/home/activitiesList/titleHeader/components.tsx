import styled from "@emotion/styled"
import { PAGE_PADDING, PAGE_PADDING_MOBILE } from "../../../../constants/constants"

export const Filters = styled("div")`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: ${PAGE_PADDING};
	flex-wrap: wrap;

	@media (max-width: 767px) {
		padding: ${PAGE_PADDING_MOBILE};
		padding-left: 1.25rem;
	}
`
export const Title = styled("h3")`
	margin: 0;
	color: ${({ theme }) => theme.text};
`
