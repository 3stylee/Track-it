import styled from "@emotion/styled"

export const ApiErrorContainer = styled("div")<{ height?: string }>`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: ${({ height }) => (height ? height : "100vh")};
	color: ${({ theme }) => theme.text};
`
