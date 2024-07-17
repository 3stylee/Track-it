import styled from "@emotion/styled"
import { PAGE_PADDING, PAGE_PADDING_MOBILE } from "../../../../constants/constants"

export const StyledHeader = styled("div")`
	border-radius: var(--bs-border-radius);
	@media (min-width: 768px) {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
`
export const StyledCard = styled("div")`
	margin-bottom: ${PAGE_PADDING};
	padding: ${PAGE_PADDING};

	@media (max-width: 769px) {
		margin-bottom: ${PAGE_PADDING_MOBILE};
		padding: ${PAGE_PADDING_MOBILE};
	}
`
