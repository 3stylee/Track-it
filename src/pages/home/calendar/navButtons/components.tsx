import styled from "@emotion/styled"

// Base styled component with common styles
const ChevronBase = styled.div<{ disabled: boolean }>`
	height: 2.3755rem;
	width: 2.375rem;
	color: white;
	padding: 0.5rem;
	cursor: pointer;
	background-color: var(--bs-primary);
	border-radius: var(--bs-border-radius);
	opacity: ${({ disabled }) => (disabled ? "0.65" : "1")};

	&:hover {
		background-color: #5734d9;
	}
`

export const ChevronPrev = ChevronBase
export const ChevronNext = ChevronBase
