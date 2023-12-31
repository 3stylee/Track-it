import React from "react"
import { convertToKm } from "../../../../utils/convertDistanceToKM"
import { MAPBOX_ACCESS_TOKEN } from "../../../../../../constants"

export interface RouteMapProps {
	polyline?: any
	name: string
	distance: string
}

export const RouteMap = ({ polyline, name, distance }: RouteMapProps) => {
	const coordinatesString = polyline.map((coord: any[]) => `[${coord.join(",")}]`).join(",")
	const url = `https://api.mapbox.com/styles/v1/mapbox/streets-v12/static/geojson({"type":"FeatureCollection","features":[{"type":"Feature","properties":{},"geometry":{"type":"LineString","coordinates":[${coordinatesString}]}}]})/auto/300x200@2x?access_token=${MAPBOX_ACCESS_TOKEN}`
	//const url = "https://placehold.co/500x300"
	const convertedDistance = convertToKm(distance)
	return (
		<div className="col">
			<div id="map" className="card h-100">
				<img src={url} alt="route map" className="card-img-left" />
				<div className="card-body">
					<h5 className="card-title">{name}</h5>
					<p className="card-text">{convertedDistance}</p>
				</div>
			</div>
		</div>
	)
}
