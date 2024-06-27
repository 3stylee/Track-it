import styled from "@emotion/styled"
import FeatherIcon from "feather-icons-react"

export const Container = styled("div")`
	margin-left: 0.5rem;
	display: flex;
	flex-direction: column;
`
export const Chevron = styled(FeatherIcon)<{ active: boolean }>`
	height: 0.75rem;
	color: ${({ theme, active }) => (active ? "var(--bs-primary)" : theme.text)};
`
