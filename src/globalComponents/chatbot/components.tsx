import styled from "@emotion/styled"
import { SIDEBAR_WIDTH, TITLE_BANNER_HEIGHT } from "../../constants/constants"

export const StyledDiv = styled("div")<{ show: boolean }>`
	display: ${({ show }) => (show ? "flex" : "none")};
	padding-top: ${TITLE_BANNER_HEIGHT};
	position: fixed;
	top: calc(${TITLE_BANNER_HEIGHT} + 0.5rem);
	left: calc(${SIDEBAR_WIDTH} + 1rem);
	background: ${({ theme }) => theme.background};
	color: ${({ theme }) => theme.text};
	border-radius: var(--bs-border-radius);
	border: 1px solid var(--bs-primary);
	align-items: center;
	flex-direction: column;
	width: 50rem;
	height: 30rem;
`
export const Response = styled("div")`
	border: 1px solid ${({ theme }) => theme.text};
	padding: 1rem;
	margin-top: 1rem;
	width: 90%;
	border-radius: var(--bs-border-radius);
`
