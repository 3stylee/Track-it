export interface Units {
	unitString: string
	meters: number
}

export interface UserData {
	stravaAccess: boolean
	dateOfLastBackup: string | undefined
	sessionsLastCopy: string | undefined
	access_token: string
	refresh_token: string
	expires_at: number
}

export interface LoadMore {
	hasMore: boolean
	page: number
	loadingMore: boolean
}
