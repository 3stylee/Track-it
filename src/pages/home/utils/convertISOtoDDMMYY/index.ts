/**
 * Converts an ISO date string to a date string in the format DD/MM/YY.
 *
 * @param {string} isoString - The ISO date string to convert.
 * @returns {string} The converted date string in the format DD/MM/YY.
 */
export const convertISOToDDMMYY = (isoString: string) => {
	const date = new Date(isoString)
	const day = date.getDate()
	const month = date.getMonth() + 1
	const year = date.getFullYear().toString().slice(-2)
	return `${day}/${month}/${year}`
}
