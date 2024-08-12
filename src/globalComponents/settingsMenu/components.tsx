import styled from "@emotion/styled"
import { Modal } from "react-bootstrap"

export const SettingContainer = styled("div")`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 1rem;
	margin-bottom: 1rem;
`
export const StyledModal = styled(Modal)`
	color: ${({ theme }) => theme.text};
`
