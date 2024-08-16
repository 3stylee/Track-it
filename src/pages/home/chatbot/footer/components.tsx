import styled from "@emotion/styled"
import { Button } from "react-bootstrap"

export const ClearButton = styled(Button)<{ show: boolean }>`
	display: ${({ show }) => (show ? "inline-block" : "none")};
`
