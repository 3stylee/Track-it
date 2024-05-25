import styled from "@emotion/styled"

export const ContainerCard = styled("div")`
	width: 30rem;
	text-align: center;

	@media (max-width: 768px) {
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
