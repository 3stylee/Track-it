import { startOfWeek, subWeeks } from "date-fns"
import { AthleteActivities } from "../../models/activities"

export const getTrainingLoad = (athleteActivities: AthleteActivities | null) => {
	if (Array.isArray(athleteActivities)) {
		const today = new Date()
		const startDate = startOfWeek(today, { weekStartsOn: 1 })
		const previousWeekStartDate = subWeeks(startDate, 1)

		const loadArray = Array(7).fill(0)
		let previousWeekLoad = 0

		athleteActivities.forEach((item) => {
			const itemDate = new Date(item.start)

			if (itemDate >= startDate && itemDate < new Date(today)) {
				const dayIndex = (itemDate.getDay() + 6) % 7
				loadArray[dayIndex] += item.load
			} else if (itemDate >= previousWeekStartDate && itemDate < startDate) {
				previousWeekLoad += item.load
			}
		})

		return { loadArray, previousWeekLoad }
	}
	return { loadArray: [], previousWeekLoad: 0 }
}
