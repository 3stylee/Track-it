import { MAPBOX_ACCESS_TOKEN } from "../../../../constants"

export const getMapboxEndpoint = (coordinatesString: string) => {
	return `https://api.mapbox.com/styles/v1/mapbox/streets-v12/static/geojson({"type":"FeatureCollection","features":[{"type":"Feature","properties":{},"geometry":{"type":"LineString","coordinates":[${coordinatesString}]}}]})/auto/300x200@2x?access_token=${MAPBOX_ACCESS_TOKEN}`
}
