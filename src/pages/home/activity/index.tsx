import React, { useEffect } from "react"
import { ImageContainer, PageContainer } from "./components"
import { ActivityImage } from "./activityImage"
import connect from "./connect"
import { useLocation } from "react-router-dom"
import { AnimatedSpinner } from "../../../globalComponents/animatedSpinner"
import ActivityGraphs from "./activityGraphs"
import ActivityTitle from "./activityTitle"
import ApiError from "../../../globalComponents/apiError"
import { CurrentActivity } from "../../../models/activities"

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
	const searchParams = new URLSearchParams(location.search)
	const id = parseInt(searchParams.get("id") || "")

	useEffect(() => {
		if (currentActivity.id !== id) {
			loadActivityStream(id)
			loadCurrentActivity(id)
		}
	}, [])

	if (apiCallsInProgress > 0) return <AnimatedSpinner />
	if (apiError !== "") return <ApiError />
	return (
		<PageContainer>
			<ImageContainer>
				<ActivityTitle />
				<ActivityImage polyline={currentActivity.polyline} predictedType={currentActivity.predictedType} />
			</ImageContainer>
			<ActivityGraphs />
		</PageContainer>
	)
}

export default connect(Activity)
