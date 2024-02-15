export const convertMetersToDistance = (distanceMeters: string, divisor: number) => {
	const distance = parseFloat(distanceMeters) / divisor
	return distance.toFixed(2)
}
