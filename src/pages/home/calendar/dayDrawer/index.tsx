import React from "react"
import { CenterContainer, DrawerContainer } from "./components"
import connect from "./connect"
import { AthleteActivities } from "../../../../models/activities"
import Event from "../event"
import { EventPlaceholder } from "../../../../globalComponents/placeholderUI/components"

interface DayDrawerProps {
	athleteActivities: AthleteActivities | null
	loading: boolean
	selectedDate: Date
}

const DayDrawer = ({ athleteActivities, loading, selectedDate }: DayDrawerProps) => {
	const activities = athleteActivities?.filter((activity) => {
		const date = new Date(activity.start)
		return date.toDateString() === selectedDate.toDateString()
	})
	return (
		<DrawerContainer>
			{loading ? (
				<EventPlaceholder />
			) : activities?.length === 0 ? (
				<CenterContainer>No Activities</CenterContainer>
			) : (
				<>
					{activities?.map((activity) => (
						<Event key={activity.id} activity={activity} />
					))}
				</>
			)}
		</DrawerContainer>
	)
}

export default connect(DayDrawer)
