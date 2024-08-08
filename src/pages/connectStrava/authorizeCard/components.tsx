import styled from "@emotion/styled"
import { BREAKPOINTS } from "../../../constants/constants"

export const ContainerCard = styled("div")`
	width: 30rem;
	text-align: center;
	background: rgba(255, 255, 255, 0.8);
	box-shadow: 0 8px 32px 0 rgba(102, 61, 255, 0.37);
	backdrop-filter: blur(5px);
	-webkit-backdrop-filter: blur(5px);
	border-radius: 10px;
	border: 1px solid rgba(255, 255, 255, 0.18);

	@media (max-width: ${BREAKPOINTS.UP.MD}) {
		width: 18rem;
	}
`
export const AuthorizeButton = styled("img")`
	height: 3rem;
`
export const SmallText = styled("p")`
	font-size: 0.75rem;
	margin-top: 0.5rem;
	padding: 0 1rem;
`
export const LinkText = styled("span")`
	color: #007bff;
	cursor: pointer;
	text-decoration: underline;
`
export const CenterContainer = styled("div")`
	display: flex;
	justify-content: center;
`
