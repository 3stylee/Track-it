import React from "react"
import { CenterContainer, DrawerContainer } from "./components"
import connect from "./connect"
import { AthleteActivities } from "../../../../models/activities"
import Event from "../event"

interface DayDrawerProps {
	athleteActivities: AthleteActivities | null
	selectedDate: Date
}

const DayDrawer = ({ athleteActivities, selectedDate }: DayDrawerProps) => {
	const activities = athleteActivities?.filter((activity) => {
		const date = new Date(activity.start)
		return date.toDateString() === selectedDate.toDateString()
	})
	return (
		<DrawerContainer>
			{activities?.length === 0 ? (
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
