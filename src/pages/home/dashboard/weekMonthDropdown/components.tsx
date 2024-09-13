import styled from "@emotion/styled"
import { Dropdown } from "react-bootstrap"
import { BREAKPOINTS } from "../../../../constants/constants"

export const StyledButton = styled(Dropdown.Toggle)`
	padding: 0.75rem 1rem;

	@media (max-width: ${BREAKPOINTS.UP.SM}) {
		padding: 0.5rem 0.75rem;
	}
`
export const StyledDropdown = styled("ul")`
	border-radius: 0.5rem;
`
