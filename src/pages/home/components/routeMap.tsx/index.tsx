import React from "react"
//import { MAPBOX_ACCESS_TOKEN } from "../../../../constants"

export interface RouteMapProps {
	polyline: any
}

export const RouteMap = (/*{ polyline }: RouteMapProps*/) => {
	//const coordinatesString = polyline.map((coord: any[]) => `[${coord.join(",")}]`).join(",")
	//const url = `https://api.mapbox.com/styles/v1/mapbox/streets-v12/static/geojson({"type":"FeatureCollection","features":[{"type":"Feature","properties":{},"geometry":{"type":"LineString","coordinates":[${coordinatesString}]}}]})/auto/300x200@2x?access_token=${MAPBOX_ACCESS_TOKEN}`
	const url = "https://placehold.co/100x100"
	return (
		<div id="map">
			<img src={url} alt="route map" />
		</div>
	)
}
