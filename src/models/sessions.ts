import { ProcessedActivity } from "./activities"

export type Session = ProcessedActivity & {
	// Add additional properties here
	groupKey: string
}

export type Sessions = Session[]

export type SessionGroups = number[][]
