import { getMinsFromSeconds } from "../getMinsFromSeconds"

export const getPaceFromSpeed = (speed: string, divisor: number) => {
	const paceSecondsPerKm = divisor / parseFloat(speed)
	return getMinsFromSeconds(paceSecondsPerKm)
}
