import React, { useEffect, useState } from "react"
import { PageContainer } from "./components"
import { ActivityImage } from "./activityImage"
import connect from "./connect"
import { useLocation } from "react-router-dom"
import { AnimatedSpinner } from "../../../globalComponents/animatedSpinner"
import ActivityGraphs from "./activityGraphs"
import ActivityTitle from "./activityTitle"
import ApiError from "../../../globalComponents/apiError"
import { CurrentActivity } from "../../../models/activities"
import { useTheme } from "@emotion/react"
import { loadActivityImage } from "../../../utils/loadActivityImage.ts"
import { CURRENT_ACTIVITY_ERRORS } from "../../../constants/constants"

interface ActivityProps {
	loadActivityDetails: (id: number) => void
	apiError: string
	currentActivity: CurrentActivity
	apiCallsInProgress: number
}

const Activity = ({ loadActivityDetails, apiError, currentActivity, apiCallsInProgress }: ActivityProps) => {
	const location = useLocation()
	const theme = useTheme()
	const searchParams = new URLSearchParams(location.search)
	const id = parseInt(searchParams.get("id") || "")
	const [backgroundImage, setBackgroundImage] = useState<string | null>(null)

	useEffect(() => {
		if (currentActivity.id !== id) {
			loadActivityDetails(id)
		}
	}, [])

	useEffect(() => {
		const polyline = currentActivity.polyline
		loadActivityImage(polyline, setBackgroundImage, theme)
	}, [currentActivity.polyline, theme])

	if (apiError === CURRENT_ACTIVITY_ERRORS.CURRENT_ACTIVITY_ERROR) return <ApiError />
	if (apiCallsInProgress > 0) return <AnimatedSpinner />
	return (
		<PageContainer>
			<ActivityTitle />
			<ActivityImage backgroundImage={backgroundImage} />
			<ActivityGraphs />
		</PageContainer>
	)
}

export default connect(Activity)
