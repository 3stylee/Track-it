import React from "react"
import { convertToKm } from "../../../../utils/convertDistanceToKM"
import { ActivityTitle, DescriptionContainer, StyledLink } from "./components"
import { getMapboxEndpoint } from "../../../../utils/getMapboxEndpoint"

export interface RouteMapProps {
	polyline?: any
	name: string
	distance: string
	id: string
}

export const RouteMap = ({ polyline, name, distance, id }: RouteMapProps) => {
	const coordinatesString = polyline.map((coord: any[]) => `[${coord.join(",")}]`).join(",")
	const url = getMapboxEndpoint(coordinatesString)
	//const url = "https://placehold.co/500x300"
	const convertedDistance = convertToKm(distance)
	return (
		<div className="col">
			<StyledLink to={`/home/activity?id=${id}`} className="col">
				<div id="map" className="card h-100">
					<img src={url} alt="route map" className="card-img-left" />
					<div className="card-body">
						<ActivityTitle className="card-title">{name}</ActivityTitle>
						<DescriptionContainer>
							<p className="card-text m-0">{convertedDistance}</p>
							<span className="badge bg-primary">Session</span>
						</DescriptionContainer>
					</div>
				</div>
			</StyledLink>
		</div>
	)
}
