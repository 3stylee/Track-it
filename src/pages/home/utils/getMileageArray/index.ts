import { SORT_OPTIONS } from "../../../../constants"
import { getCurrentMonthWeeks } from "../getWeeksOfMonth"

export const getMileageArray = (data: any, type: string, divisor: number) => {
	return type === SORT_OPTIONS.WEEK ? getWeekMileageArray(data, divisor) : getMonthMileageArray(data, divisor)
}

export const getWeekMileageArray = (data: any, divisor: number) => {
	if (Array.isArray(data)) {
		const today = new Date()
		const currentDayOfWeek = today.getDay()

		const daysToMonday = currentDayOfWeek === 0 ? 6 : currentDayOfWeek - 1
		const startDate = new Date()
		startDate.setDate(today.getDate() - daysToMonday)
		startDate.setHours(0, 0, 0, 0)

		const distancePerDay = Array(7).fill(0)

		data.forEach((item: any) => {
			const itemDate = new Date(item.start)

			if (itemDate >= startDate && itemDate < new Date(today)) {
				const dayIndex = (itemDate.getDay() + 6) % 7
				distancePerDay[dayIndex] += parseFloat((item.distance / divisor).toFixed(2))
			}
		})

		return distancePerDay
	}
	return []
}

export const getMonthMileageArray = (data: any, divisor: number) => {
	if (Array.isArray(data)) {
		const monthWeeks = getCurrentMonthWeeks()
		const distancePerWeek = Array(monthWeeks.length).fill(0)

		data.forEach((item: any) => {
			const itemDate = new Date(item.start)

			for (let i = 0; i < distancePerWeek.length; i++) {
				if (itemDate >= monthWeeks[i].start && itemDate <= monthWeeks[i].end) {
					distancePerWeek[i] += parseFloat((item.distance / divisor).toFixed(2))
				}
			}
		})

		return distancePerWeek
	}
	return []
}
