import styled from "@emotion/styled"
import { InputGroup } from "react-bootstrap"

export const IconContainer = styled("span")`
	height: 2.5rem;
	border-top-left-radius: 0;
	border-bottom-left-radius: 0;
`
export const SearchbarContainer = styled(InputGroup)`
	width: 30rem;

	@media (max-width: 768px) {
		width: 20rem;
	}
`
