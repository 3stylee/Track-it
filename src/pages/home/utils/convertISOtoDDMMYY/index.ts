export const convertISOToDDMMYY = (isoString: string) => {
	const date = new Date(isoString)
	const day = date.getDate()
	const month = date.getMonth() + 1
	const year = date.getFullYear().toString().slice(-2)
	return `${day}/${month}/${year}`
}
