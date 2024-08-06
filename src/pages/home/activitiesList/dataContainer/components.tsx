import styled from "@emotion/styled"
import { BREAKPOINTS, PAGE_PADDING, PAGE_PADDING_MOBILE } from "../../../../constants/constants"

export const Container = styled("div")<{ noPadding: boolean | undefined }>`
	padding: ${PAGE_PADDING};
	padding-top: 0;
	${({ noPadding }) => noPadding && "padding: 0;"}

	@media (max-width: ${BREAKPOINTS.UP.MD}) {
		padding: 0rem ${PAGE_PADDING_MOBILE};
		${({ noPadding }) => noPadding && "padding: 0;"}
	}
`
