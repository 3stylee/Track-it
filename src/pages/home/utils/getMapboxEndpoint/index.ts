import { MAPBOX_ACCESS_TOKEN, THEMES } from "../../../../constants/constants"

export const getMapboxEndpoint = (coordinatesString: string, theme?: string) => {
	const style = theme === THEMES.DARK ? "3stylee/clrp7f0qp00ag01r4gbqe64pp" : "mapbox/streets-v12"
	return `https://api.mapbox.com/styles/v1/${style}/static/geojson({"type":"FeatureCollection","features":[{"type":"Feature","properties":{"stroke": ${
		theme === THEMES.DARK ? '"%23f0f0f0"' : '"%23A020F0"'
	}},"geometry":{"type":"LineString","coordinates":[${coordinatesString}]}}]})/auto/300x200@2x?access_token=${MAPBOX_ACCESS_TOKEN}`
}
