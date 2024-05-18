import { MAPBOX_ACCESS_TOKEN, THEMES } from "../../../../constants/constants"

/**
 * Constructs the URL for the Mapbox Static Images API to get a static map image with a line representing a route.
 *
 * @param {string} coordinatesString - A string of coordinates for the route.
 * @param {string} [theme] - The theme for the map. Either dark or light.
 *
 * @returns {string} The URL endpoint for the Mapbox Static Images API.
 */
export const getMapboxEndpoint = (coordinatesString: string, theme?: string) => {
	const style = theme === THEMES.DARK ? "3stylee/clrp7f0qp00ag01r4gbqe64pp" : "mapbox/streets-v12"
	return `https://api.mapbox.com/styles/v1/${style}/static/geojson({"type":"FeatureCollection","features":[{"type":"Feature","properties":{"stroke": ${
		theme === THEMES.DARK ? '"%23f0f0f0"' : '"%23A020F0"'
	}},"geometry":{"type":"LineString","coordinates":[${coordinatesString}]}}]})/auto/300x200@2x?access_token=${MAPBOX_ACCESS_TOKEN}`
}
