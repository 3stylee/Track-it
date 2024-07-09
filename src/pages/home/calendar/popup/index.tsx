import React from "react"
import { AthleteActivities } from "../../../../models/activities"
import { Activities, Close, PopupContainer } from "./components"
import Event from "../event"
import { useTheme } from "@emotion/react"

interface PopupProps {
	setShowMore: (showMore: boolean) => void
	activities: AthleteActivities
}

export const Popup = ({ activities, setShowMore }: PopupProps) => {
	const theme = useTheme()
	return (
		<PopupContainer data-bs-theme={theme.bootstrap.background}>
			<Close onClick={() => setShowMore(false)} />
			<Activities>
				{activities.map((activity) => (
					<Event key={activity.id} activity={activity} />
				))}
			</Activities>
		</PopupContainer>
	)
}
