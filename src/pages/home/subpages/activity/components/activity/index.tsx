import React, { useEffect } from "react"
import { ImageAndLapsContainer, PageContainer } from "./components"
import { ActivityImage } from "../activityImage"
import connect from "./connect"
import { useLocation } from "react-router-dom"
import { AnimatedSpinner } from "../../../../../../globalComponents/animatedSpinner"
import ActivityGraphs from "../activityGraphs"
import { LapsTable } from "../lapsTable"

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
					<ImageAndLapsContainer>
						<ActivityImage polyline={currentActivity.polyline} />
					</ImageAndLapsContainer>
					<div className="row row-cols-1 row-cols-xl-2 g-4">
						<div className="col">
							<LapsTable laps={currentActivity.laps} />
						</div>
						<ActivityGraphs />
					</div>
				</>
			)}
		</PageContainer>
	)
}

export default connect(Activity)
