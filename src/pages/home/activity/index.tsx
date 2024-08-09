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

interface ActivityProps {
	loadActivityStream: (id: number) => void
	loadCurrentActivity: (id: number) => void
	apiError: string | object
	currentActivity: CurrentActivity
	apiCallsInProgress: number
}

const Activity = ({
	loadActivityStream,
	loadCurrentActivity,
	apiError,
	currentActivity,
	apiCallsInProgress,
}: ActivityProps) => {
	const location = useLocation()
	const theme = useTheme()
	const searchParams = new URLSearchParams(location.search)
	const id = parseInt(searchParams.get("id") || "")
	const [backgroundImage, setBackgroundImage] = useState<string | null>(null)

	useEffect(() => {
		if (currentActivity.id !== id) {
			loadActivityStream(id)
			loadCurrentActivity(id)
		}
	}, [])

	useEffect(() => {
		const polyline = currentActivity.polyline
		loadActivityImage(polyline, setBackgroundImage, theme.name)
	}, [currentActivity.polyline, theme.name])

	if (apiCallsInProgress > 0 || backgroundImage === null) return <AnimatedSpinner />
	if (apiError !== "") return <ApiError />
	return (
		<PageContainer>
			<ActivityTitle />
			<ActivityImage backgroundImage={backgroundImage} />
			<ActivityGraphs />
		</PageContainer>
	)
}

export default connect(Activity)
