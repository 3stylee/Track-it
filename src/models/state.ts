export interface Units {
	unitString: string
	meters: number
}

export type Zone = { min: number; max: number }

export interface UserData {
	stravaAccess: boolean
	firstActivityDate: string | undefined
	dateOfLastBackup: string | undefined
	access_token: string
	refresh_token: string
	expires_at: number
	sex: "M" | "F" | ""
	zones: Zone[]
}

export interface LoadMore {
	loadingMore: boolean
	hasMore: boolean
	page: number
}
