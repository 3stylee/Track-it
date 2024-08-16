import styled from "@emotion/styled"
import {
	BREAKPOINTS,
	PAGE_PADDING,
	PAGE_PADDING_MOBILE,
	SIDEBAR_WIDTH,
	TITLE_BANNER_HEIGHT,
} from "../../../constants/constants"
import { Card } from "react-bootstrap"
import Lottie from "lottie-react"

export const PageContainer = styled("div")`
	padding: ${PAGE_PADDING};
	padding-top: ${TITLE_BANNER_HEIGHT};
	margin-left: calc(${SIDEBAR_WIDTH} - 0.375rem);

	@media (max-width: ${BREAKPOINTS.UP.MD}) {
		margin-left: 0;
		padding: ${PAGE_PADDING_MOBILE};
		padding-top: ${TITLE_BANNER_HEIGHT};
	}
`

export const StyledCard = styled(Card)`
	height: calc(100vh - ${TITLE_BANNER_HEIGHT} - 2rem);
	margin-top: 1rem;
	padding: 1rem;
	border-radius: var(--bs-border-radius);
	background-color: ${({ theme }) => theme.bootstrap.backgroundColor};
	color: ${({ theme }) => theme.text};
`

export const MessageContainer = styled("div")`
	height: 95%;
	overflow-y: auto;
`

export const Message = styled("p")<{ sender: "user" | "bot" }>`
	display: flex;

	justify-content: ${({ sender }) => (sender === "user" ? "right" : "left")};
`
export const MessageText = styled("div")<{ sender: "user" | "bot" }>`
	max-width: 70%;
	background: ${({ sender }) => (sender === "user" ? "var(--bs-primary) " : "var(--bs-secondary)")};
	color: white;
	padding: 1rem;
	margin: 0.5rem;
	border-radius: var(--bs-border-radius);
`
export const Loading = styled(Lottie)`
	height: 1.25rem;
`
