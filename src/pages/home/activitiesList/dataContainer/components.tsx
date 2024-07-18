import styled from "@emotion/styled"
import { BREAKPOINTS, PAGE_PADDING, PAGE_PADDING_MOBILE } from "../../../../constants/constants"

export const Container = styled("div")<{ noPadding: boolean | undefined }>`
	padding: ${PAGE_PADDING};
	padding-top: 5.375rem;
	margin-top: 0.5rem;

	@media (max-width: ${BREAKPOINTS.UP.MD}) {
		padding: 0rem ${PAGE_PADDING_MOBILE};
		padding-top: 3.375rem;
		margin-top: 0;
	}
	${({ noPadding }) => noPadding && "padding: 0;"}
`
