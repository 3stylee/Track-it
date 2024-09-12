import { keyframes } from "@emotion/react"
import styled from "@emotion/styled"

const gradient = keyframes`
	from {
	  left: 0;
	}
	
	to {
	  left: calc(100% - var(--width));
	}
`
export const TextPlaceholder = styled("div")<{ fontSize: string; width: string }>`
	background: ${({ theme }) => theme.loading.placeholderBackground};
	height: ${({ fontSize }) => fontSize};
	width: ${({ width }) => width};
	position: relative;
	margin-bottom: 0.5rem;
	--width: calc(${({ width }) => width} / 3);

	&:after {
		content: "";
		position: absolute;
		top: 0;
		left: 0.5rem;
		height: ${({ fontSize }) => fontSize};
		width: var(--width);
		background: ${({ theme }) => theme.loading.placeholderGradient};
		animation: ${gradient} 1s infinite ease-in-out;
	}
`
