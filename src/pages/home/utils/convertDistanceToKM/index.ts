export const convertToKm = (distanceMeters: string) => {
	const distanceKm = parseFloat(distanceMeters) / 1000
	return distanceKm.toFixed(2) + " km"
}
