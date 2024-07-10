import styled from "@emotion/styled"
import { SIDEBAR_WIDTH, TITLE_BANNER_HEIGHT } from "../../constants/constants"

export const ProgressContainer = styled("div")<{ height: string | undefined; noMargin: boolean }>`
	display: flex;
	justify-content: center;
	align-items: center;
	height: calc(${({ height }) => (height ? height : "100vh")});
	padding-top: ${({ noMargin }) => (noMargin ? "0" : TITLE_BANNER_HEIGHT)};
	margin-left: ${({ noMargin }) => (noMargin ? "0" : SIDEBAR_WIDTH)};

	@media (max-width: 768px) {
		margin-left: 0;
	}
`
