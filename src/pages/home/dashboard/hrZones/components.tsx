import styled from "@emotion/styled"
import { Card } from "react-bootstrap"
import { BREAKPOINTS } from "../../../../constants/constants"

export const StyledCard = styled(Card)`
	background-color: ${({ theme }) => theme.bootstrap.backgroundColor};
	color: ${({ theme }) => theme.text};
	height: 100%;
`
export const Body = styled("div")`
	padding: 1rem;
	height: 100%;
`
export const StyledDonut = styled("div")`
	height: 65%;
	margin-top: 1rem;

	@media (max-width: ${BREAKPOINTS.UP.LG}) {
		height: 80%;
	}
`
export const ZoneKeys = styled("div")`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`
export const Key = styled("span")`
	margin-right: 1rem;
	font-size: 0.8rem;
`

export const ColourSquare = styled("span")<{ color: string }>`
	display: inline-block;
	width: 10px;
	height: 10px;
	background-color: ${({ color }) => color};
	margin-right: 0.25rem;
`
