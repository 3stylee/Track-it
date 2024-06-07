export interface Units {
	unitString: string
	meters: number
}

export interface UserData {
	stravaAccess: boolean
	dateOfLastBackup: string | undefined
	sessionsLastCopy: string | undefined
	email: string
	access_token: string
	refresh_token: string
	expires_at: number
}

export interface LoadMore {
	hasMore: boolean
	loadingMore: boolean
}
