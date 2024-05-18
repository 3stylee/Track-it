/**
 * Extracts the last segment from the current URL path and returns it.
 *
 * @param {Object} location - An object representing the location.
 *
 * @returns {string} The last segment of the URL path.
 */
export const getUrlPath = (location: any) => {
	const pathSegments = location.pathname.split("/")
	let urlPath = pathSegments.at(-1)
	if (urlPath === "home") {
		return ""
	}
	if (urlPath === "activity") {
		urlPath = "search"
	}
	return urlPath
}
