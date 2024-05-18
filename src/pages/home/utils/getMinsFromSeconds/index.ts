/**
 * Converts a number of seconds into a string representing the time in the format "hh:mm:ss" or "mm:ss".
 *
 * @param {number} seconds - The number of seconds to convert.
 *
 * @returns {string} A string representing the time. The format is determined by the number of seconds.
 */
export const getMinsFromSeconds = (seconds: number) => {
	const hours = Math.floor(seconds / 3600)
	const minutes = Math.floor((seconds - hours * 3600) / 60)
	const remainingSeconds = Math.floor(seconds % 60)
	if (hours > 0) {
		return `${hours}:${minutes < 10 ? "0" : ""}${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`
	}
	return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`
}
