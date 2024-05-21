import styled from "@emotion/styled"
import { TITLE_BANNER_HEIGHT } from "../../../constants/constants"
import { Card } from "react-bootstrap"

export const PageContainer = styled("div")`
	margin-top: ${TITLE_BANNER_HEIGHT};
	display: flex;
	justify-content: center;
	align-items: center;
	height: calc(100vh - ${TITLE_BANNER_HEIGHT});
`

export const CentralCard = styled(Card)`
	width: 30rem;
	padding: 1rem;
`
export const CentralTextLink = styled("a")`
	text-align: center;
	cursor: pointer;
	font-size: 0.9rem;
`
export const CentralSmallText = styled("p")`
	margin: 0.5rem 0;
	text-align: center;
	font-size: 0.8rem;
	font-weight: bold;
`
