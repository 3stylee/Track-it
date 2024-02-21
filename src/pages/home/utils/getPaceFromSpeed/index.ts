import { getMinsFromSeconds } from "../getMinsFromSeconds"

export const getPaceFromSpeed = (speed: number, divisor: number) => {
	const paceSecondsPerKm = divisor / speed
	return getMinsFromSeconds(paceSecondsPerKm)
}
