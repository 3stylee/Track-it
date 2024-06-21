import { getMinsFromSeconds } from "../getMinsFromSeconds"

/**
 * Calculates the pace (mins per kilometer/mile) from a speed in meters per second.
 *
 * @param {number} speed - The speed in meters per second.
 * @param {number} divisor - The divisor to be used to calculate the pace. Determines whether the pace is in minutes per kilometer or per mile.
 *
 * @returns {string} A string representing the pace in the format "mm:ss" per kilometer/mile. If the speed is 0, it returns "--:--".
 */
export const getPaceFromSpeed = (speed: number, divisor: number) => {
	const paceSecondsPerKm = divisor / speed
	if (paceSecondsPerKm === Infinity) return "--:--"
	return getMinsFromSeconds(paceSecondsPerKm)
}
