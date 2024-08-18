import { Zone } from "../../models/state"

export const calculateTRIMP = (activities: any, zones: Zone[], sex: "M" | "F") => {
	return activities.map((activity: any) => {
		const avgHeartrate = activity.heartrate || 0
		const duration = activity.time / 60
		const maxHeartrate = zones[zones.length - 1].min
		const minHeartrate = zones[0].max / 2 - 10
		const multiplier = sex === "M" ? 1.92 : 1.67

		const HR_reserve = (avgHeartrate - minHeartrate) / (maxHeartrate - minHeartrate)

		const TRIMP = duration * HR_reserve * (0.64 * Math.exp(multiplier * HR_reserve))
		return { ...activity, load: Math.round(TRIMP) }
	})
}
