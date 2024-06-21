/**
 * Extracts the second segment from the current URL path and returns it.
 *
 * @param {Object} location - An object representing the location.
 *
 * @returns {string} The second segment of the URL path.
 */
export const getUrlPath = (location: any) => {
	const pathSegments = location.pathname.split("/")
	let secondSegment = pathSegments.at(2)
	if (secondSegment === undefined) {
		return ""
	}
	if (secondSegment === "activity") {
		return "search"
	}
	return secondSegment
}
