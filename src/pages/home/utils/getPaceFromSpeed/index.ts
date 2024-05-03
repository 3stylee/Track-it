import { getMinsFromSeconds } from "../getMinsFromSeconds"

export const getPaceFromSpeed = (speed: number, divisor: number) => {
	const paceSecondsPerKm = divisor / speed
	if (paceSecondsPerKm === Infinity) return "--:--"
	return getMinsFromSeconds(paceSecondsPerKm)
}
