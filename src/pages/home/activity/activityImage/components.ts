import styled from "@emotion/styled"
import { Badge } from "react-bootstrap"

export const RoundedImage = styled("img")`
	border-radius: var(--bs-border-radius);
	width: 100%;
	@media (min-width: 992px) {
		width: 550px;
	}
`
export const ImageContainer = styled("div")`
	position: relative;
	@media (max-width: 991px) {
		margin-bottom: 0.5rem;
	}
`
export const StyledBadge = styled(Badge)`
	position: absolute;
	right: 0.5rem;
	top: 0.5rem;
	${({ theme }) => theme.name === "dark" && `border: 1px solid ${theme.text};`}
`
