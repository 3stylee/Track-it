import React from "react"
import { convertToKm } from "../../../../utils/convertDistanceToKM"
import { ActivityTitle, CardContainer, DescriptionContainer, StyledLink } from "./components"
import { getMapboxEndpoint } from "../../../../utils/getMapboxEndpoint"
import { getPaceFromSpeed } from "../../../../utils/getPaceFromSpeed"

export interface RouteMapProps {
	polyline?: any
	name: string
	distance: string
	id: string
	speed: string
}

export const RouteMap = ({ polyline, speed, name, distance, id }: RouteMapProps) => {
	const coordinatesString = polyline.map((coord: any[]) => `[${coord.join(",")}]`).join(",")
	const url = getMapboxEndpoint(coordinatesString)
	//const url = "https://placehold.co/500x300"
	const convertedDistance = convertToKm(distance)
	const pace = getPaceFromSpeed(speed)
	return (
		<div className="col">
			<StyledLink to={`/home/activity?id=${id}`} className="col">
				<CardContainer id="map" className="card h-100">
					<img src={url} alt="route map" className="card-img-left" />
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
