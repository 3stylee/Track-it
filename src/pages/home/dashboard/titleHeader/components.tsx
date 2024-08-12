import styled from "@emotion/styled"
import { BREAKPOINTS, PAGE_PADDING, PAGE_PADDING_MOBILE } from "../../../../constants/constants"

export const StyledHeader = styled("div")`
	border-radius: var(--bs-border-radius);
	@media (min-width: ${BREAKPOINTS.DOWN.MD}) {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
`
export const StyledCard = styled("div")`
	margin-bottom: ${PAGE_PADDING};
	padding: 1.5rem;

	@media (max-width: ${BREAKPOINTS.UP.MD}) {
		margin-bottom: ${PAGE_PADDING_MOBILE};
		padding: ${PAGE_PADDING_MOBILE};
	}
`
