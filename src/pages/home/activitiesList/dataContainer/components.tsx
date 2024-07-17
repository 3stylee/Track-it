import styled from "@emotion/styled"
import { PAGE_PADDING, PAGE_PADDING_MOBILE } from "../../../../constants/constants"

export const Container = styled("div")`
	padding: ${PAGE_PADDING};
	padding-top: 0;

	@media (max-width: 767px) {
		padding: 0rem ${PAGE_PADDING_MOBILE};
	}
`
