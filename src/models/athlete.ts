export interface AthleteData {
	yearTotalRuns: number
	yearTotalRunDistance: number
	allTotalRuns: number
	allTotalRunDistance: number
}

export type LoadInitialAthleteActivities = (limit?: number) => void

export type QuickStatsType = {
	"Distance This Year": { count: string; unit: string }
	"Runs This Year": { count: number }
	"Distance All Time": { count: string; unit: string }
	"Runs All Time": { count: number }
	[key: string]: { count: number | string; unit?: string }
}
