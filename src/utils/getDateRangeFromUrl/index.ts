/**
 * Extracts the before and after parameters from the URL query string and converts them into a date range.
 *
 * @returns {Object} The date range object.
 */
export const getDateRangeFromUrl = () => {
	const params = window.location.search
	const searchParams = new URLSearchParams(params)
	const before = searchParams.get("before")
	const after = searchParams.get("after")

	if (before && after) {
		return {
			from: new Date(parseInt(after) * 1000),
			to: new Date(parseInt(before) * 1000),
		}
	}

	return {
		from: undefined,
		to: undefined,
	}
}
