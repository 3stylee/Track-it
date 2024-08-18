import styled from "@emotion/styled"
import { Alert, Button, ProgressBar } from "react-bootstrap"
import { BREAKPOINTS } from "../../constants/constants"

export const Container = styled("div")`
	color: ${({ theme }) => theme.text};
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	height: 100vh;
	gap: 2rem;
	padding: 5rem;
	text-align: center;

	@media (max-width: ${BREAKPOINTS.UP.MD}) {
		font-size: 0.75rem;
		padding: 2rem;
		gap: 1rem;
	}
`
export const StyledButton = styled(Button)`
	@media (max-width: ${BREAKPOINTS.UP.MD}) {
		font-size: 0.75rem;
	}
`

export const Progress = styled(ProgressBar)`
	height: 0.5rem;
	width: 40%;

	@media (max-width: ${BREAKPOINTS.UP.MD}) {
		width: 80%;
	}
`
export const StyledAlert = styled(Alert)`
	position: fixed;
	bottom: 2rem;
	margin: 0 2rem;
	padding: 0.5rem 1rem;
	font-size: 0.75rem;

	@media (max-width: ${BREAKPOINTS.UP.MD}) {
		font-size: 0.5rem;
	}
`
