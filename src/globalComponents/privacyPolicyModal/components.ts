import styled from "@emotion/styled"
import { Modal } from "react-bootstrap"

export const Container = styled("div")`
	max-height: 60vh;
	overflow-y: auto;
`

export const ThemedModal = styled(Modal)`
	color: ${({ theme }) => theme.text};
`
