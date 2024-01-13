export const getMinsPerKm = (secondsPerKm: number) => {
	const minutes = Math.floor(secondsPerKm / 60)
	const seconds = Math.floor(secondsPerKm % 60)
	console.log(secondsPerKm)
	return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}/km`
}
