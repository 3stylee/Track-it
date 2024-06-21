/**
 * Converts a distance from meters to another unit by dividing by a specified divisor.
 *
 * @param {number} distanceMeters - The distance in meters to convert.
 * @param {number} divisor - The divisor to use for the conversion. For example, to convert to kilometers, use 1000.
 * @returns {string} The converted distance, rounded to two decimal places.
 */
export const convertMetersToDistance = (distanceMeters: number, divisor: number) => {
	const distance = distanceMeters / divisor
	return distance.toFixed(2)
}
