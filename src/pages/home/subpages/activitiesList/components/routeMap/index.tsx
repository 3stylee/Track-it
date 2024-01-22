import React, { useContext } from "react"
import { convertToKm } from "../../../../utils/convertDistanceToKM"
import { ActivityTitle, CardContainer, DescriptionContainer, StyledImage, StyledLink } from "./components"
import { getMapboxEndpoint } from "../../../../utils/getMapboxEndpoint"
import { getPaceFromSpeed } from "../../../../utils/getPaceFromSpeed"
import { THEMES } from "../../../../../../constants"
import ThemeContext from "../../../../../../theme/themeContext"

export interface RouteMapProps {
	polyline?: any
	name: string
	distance: string
	id: string
	speed: string
}

export const RouteMap = ({ polyline, speed, name, distance, id }: RouteMapProps) => {
	const { theme } = useContext(ThemeContext)
	const coordinatesString = polyline.map((coord: any[]) => `[${coord.join(",")}]`).join(",")
	const url = getMapboxEndpoint(coordinatesString, theme)
	//const url = "https://placehold.co/500x300"
	const convertedDistance = convertToKm(distance)
	const pace = getPaceFromSpeed(speed)
	return (
		<div className="col">
			<StyledLink to={`/home/activity?id=${id}`} className="col">
				<CardContainer
					id="map"
					className={`card ${theme === THEMES.DARK ? "text-white bg-dark" : ""} h-100`}
					theme={theme}>
					<StyledImage src={url} alt="route map" className="card-img-left" />
					<div className="card-body">
						<ActivityTitle className="card-title">{name}</ActivityTitle>
						<DescriptionContainer>
							<p className="card-text m-0">{convertedDistance}</p>
							<p className="card-text m-0">{pace}</p>
						</DescriptionContainer>
					</div>
				</CardContainer>
			</StyledLink>
		</div>
	)
}
