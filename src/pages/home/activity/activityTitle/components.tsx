import styled from "@emotion/styled"
import { Card, Col } from "react-bootstrap"
import { BREAKPOINTS } from "../../../../constants/constants"

export const Title = styled("div")`
	text-align: center;
`
export const StyledCard = styled(Card)`
	background-color: ${({ theme }) => theme.currentActivity.cardBackground};
	color: ${({ theme }) => theme.text};
	backdrop-filter: ${({ theme }) => theme.currentActivity.cardBlur};
	margin-bottom: 1.5rem;
	@media (max-width: ${BREAKPOINTS.UP.LG}) {
		margin-bottom: 0.25rem;
	}
`
export const CenteredCol = styled(Col)`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`
export const StatsContainer = styled("div")`
	margin-top: 7rem;

	@media (max-width: ${BREAKPOINTS.UP.XL}) {
		margin-top: 3rem;
	}

	@media (max-width: ${BREAKPOINTS.UP.LG}) {
		margin-bottom: 1rem;
	}
`
export const Date = styled("div")`
	color: ${({ theme }) => theme.secondaryText};
	font-weight: bold;
	font-size: 0.875rem;
	margin-bottom: 0.5rem;
`
export const MoreButton = styled("span")`
	position: absolute;
	top: 0.75rem;
	left: 0.75rem;
	border-radius: 50%;
	height: 2.5rem;
	width: 2.5rem;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: background-color 0.3s;

	&:hover {
		cursor: pointer;
		background-color: ${({ theme }) => theme.sidebar.iconHover};
	}
`
