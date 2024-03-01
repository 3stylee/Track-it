import styled from "@emotion/styled"
import { TITLE_BANNER_HEIGHT } from "../../../../../../constants"

export const NoResultsContainer = styled("div")`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: calc(100vh - ${TITLE_BANNER_HEIGHT} - 14.625rem);
	color: ${({ theme }) => theme.text};
`
export const NoResultsTitle = styled("h2")`
	margin: 1rem 0;
	color: ${({ theme }) => theme.text};
`
export const NoResultsDescription = styled("p")`
	width: 50%;
	margin: 0;
	color: ${({ theme }) => theme.text};
`
