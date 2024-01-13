import React from "react"
import { convertToKm } from "../../../../utils/convertDistanceToKM"
import { MAPBOX_ACCESS_TOKEN } from "../../../../../../constants"
import { ActivityTitle, DescriptionContainer, StyledLink } from "./components"

export interface RouteMapProps {
	polyline?: any
	name: string
	distance: string
	id: string
}

export const RouteMap = ({ polyline, name, distance, id }: RouteMapProps) => {
	const coordinatesString = polyline.map((coord: any[]) => `[${coord.join(",")}]`).join(",")
	const url = `https://api.mapbox.com/styles/v1/mapbox/streets-v12/static/geojson({"type":"FeatureCollection","features":[{"type":"Feature","properties":{},"geometry":{"type":"LineString","coordinates":[${coordinatesString}]}}]})/auto/300x200@2x?access_token=${MAPBOX_ACCESS_TOKEN}`
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
