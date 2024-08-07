import styled from "@emotion/styled"
import { Modal } from "react-bootstrap"

export const SettingContainer = styled("div")`
	display: flex;
	justify-content: space-between;
	align-items: center;
`
export const StyledModal = styled(Modal)`
	color: ${({ theme }) => theme.text};
`
