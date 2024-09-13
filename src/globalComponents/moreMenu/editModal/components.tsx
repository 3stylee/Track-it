import styled from "@emotion/styled"
import { Modal } from "react-bootstrap"

export const StyledModal = styled(Modal)`
	color: ${({ theme }) => theme.text};
`

export const LoadingCheckboxContainer = styled("div")`
	display: flex;
	align-items: center;
	gap: 0.5rem;
`
