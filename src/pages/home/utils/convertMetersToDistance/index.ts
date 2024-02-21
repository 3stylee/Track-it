export const convertMetersToDistance = (distanceMeters: number, divisor: number) => {
	const distance = distanceMeters / divisor
	return distance.toFixed(2)
}
