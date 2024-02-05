import React, { useEffect } from "react"
import { ImageContainer, PageContainer } from "./components"
import { ActivityImage } from "../activityImage"
import connect from "./connect"
import { useLocation } from "react-router-dom"
import { AnimatedSpinner } from "../../../../../../globalComponents/animatedSpinner"
import ActivityGraphs from "../activityGraphs"

export const Activity = ({ loadActivityStream, loadCurrentActivity, currentActivity, apiCallsInProgress }: any) => {
	const location = useLocation()
	const searchParams = new URLSearchParams(location.search)
	const id = parseInt(searchParams.get("id") || "")

	useEffect(() => {
		if (currentActivity.id !== id) {
			loadActivityStream(id)
			loadCurrentActivity(id)
		}
	}, [])

	return (
		<PageContainer>
			{apiCallsInProgress > 0 ? (
				<AnimatedSpinner />
			) : (
				<>
					<ImageContainer>
						<ActivityImage polyline={currentActivity.polyline} />
					</ImageContainer>
					<ActivityGraphs laps={currentActivity.laps} />
				</>
			)}
		</PageContainer>
	)
}

export default connect(Activity)
