import React, { useEffect } from "react"
import { ImageContainer, PageContainer } from "./components"
import { ActivityImage } from "../activityImage"
import connect from "./connect"
import { useLocation } from "react-router-dom"
import { AnimatedSpinner } from "../../../../../../globalComponents/animatedSpinner"
import ActivityGraphs from "../activityGraphs"
import ActivityTitle from "../activityTitle"
import { CurrentActivity } from "../../models"
import ApiError from "../../../../../../globalComponents/apiError"

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
				<ActivityImage polyline={currentActivity.polyline} />
			</ImageContainer>
			<ActivityGraphs laps={currentActivity.laps} />
		</PageContainer>
	)
}

export default connect(Activity)
