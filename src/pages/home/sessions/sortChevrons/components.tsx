import styled from "@emotion/styled"
import { ChevronDown, ChevronUp } from "react-feather"

export const Container = styled("div")`
	margin-left: 0.5rem;
	display: flex;
	flex-direction: column;
`
export const UpChevron = styled(ChevronUp)<{ active: boolean }>`
	height: 0.75rem;
	color: ${({ active }) => (active ? "black" : "white")};
`
export const DownChevron = styled(ChevronDown)<{ active: boolean }>`
	height: 0.75rem;
	color: ${({ active }) => (active ? "black" : "white")};
`
