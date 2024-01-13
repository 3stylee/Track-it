import React, { useEffect } from "react"
import { PageContainer } from "./components"
import { ActivityImage } from "../activityImage"
import connect from "./connect"
import { useLocation } from "react-router-dom"
import { AnimatedSpinner } from "../../../../../../globalComponents/animatedSpinner"
import ActivityGraphs from "../activityGraphs"

export const Activity = ({ loadActivityStream, apiCallsInProgress }: any) => {
	const location = useLocation()
	const searchParams = new URLSearchParams(location.search)
	const id = searchParams.get("id")

	useEffect(() => {
		loadActivityStream(id)
	}, [])

	return (
		<PageContainer>
			{apiCallsInProgress > 0 ? (
				<AnimatedSpinner />
			) : (
				<>
					<ActivityImage />
					<ActivityGraphs />
				</>
			)}
		</PageContainer>
	)
}

export default connect(Activity)
