import { SORT_OPTIONS } from "../../../../constants/constants"
import { AthleteActivities } from "../../subpages/activitiesList/models"
import { getCurrentMonthWeeks } from "../getWeeksOfMonth"

/**
 * Calculates the total distance covered each day of the current week or each week of the current month, depending on the provided type.
 *
 * @param {AthleteActivities} data - The activities data for the athlete.
 * @param {string} type - The type of data to calculate. Month or Week.
 * @param {number} divisor - The divisor to convert meters to the desired unit.
 *
 * @returns {number[]} An array of numbers, each representing the total distance covered in a specific time period.
 */
export const getMileageArray = (data: AthleteActivities, type: string, divisor: number) => {
	return type === SORT_OPTIONS.WEEK ? getWeekMileageArray(data, divisor) : getMonthMileageArray(data, divisor)
}

/**
 * Creates an array of the total distance covered on each day of the current week.
 *
 * @param {AthleteActivities} data - The activities data for the athlete.
 * @param {number} divisor - The divisor to convert meters to the desired unit.
 *
 * @returns {number[]} An array of 7 numbers, each representing the total distance covered on a specific day of the current week.
 */
export const getWeekMileageArray = (data: AthleteActivities, divisor: number): number[] => {
	if (Array.isArray(data)) {
		const today = new Date()
		const currentDayOfWeek = today.getDay()

		const daysToMonday = currentDayOfWeek === 0 ? 6 : currentDayOfWeek - 1
		const startDate = new Date()
		startDate.setDate(today.getDate() - daysToMonday)
		startDate.setHours(0, 0, 0, 0)

		const distancePerDay = Array(7).fill(0)

		data.forEach((item) => {
			if (item.type !== "Run") return
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

/**
 * Creates an array of the total distance covered on each week of the current month.
 *
 * @param {AthleteActivities} data - The activities data for the athlete.
 * @param {number} divisor - The divisor to convert meters to the desired unit.
 *
 * @returns {number[]} An array of numbers, each representing the total distance covered in a specific week of the current month.
 */
export const getMonthMileageArray = (data: AthleteActivities, divisor: number): number[] => {
	if (Array.isArray(data)) {
		const monthWeeks = getCurrentMonthWeeks()
		const distancePerWeek = Array(monthWeeks.length).fill(0)

		data.forEach((item) => {
			if (item.type !== "Run") return
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
