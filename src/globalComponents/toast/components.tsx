import styled from "@emotion/styled"
import { Toast, ToastContainer } from "react-bootstrap"

export const StyledToastContainer = styled(ToastContainer)`
	position: fixed;
	margin: 1rem;
`
export const StyledToast = styled(Toast)`
	background-color: ${({ theme }) => theme.background};
	color: ${({ theme }) => theme.text};
`
