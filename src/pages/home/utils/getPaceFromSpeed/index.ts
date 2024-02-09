import { getMinsFromSeconds } from "../getMinsFromSeconds"

export const getPaceFromSpeed = (speed: string) => {
	const paceSecondsPerKm = 1000 / parseFloat(speed)
	return getMinsFromSeconds(paceSecondsPerKm)
}
