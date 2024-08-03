import React from "react"
import { CenterContainer, DrawerContainer } from "./components"
import connect from "./connect"
import { AthleteActivities } from "../../../../models/activities"
import Event from "../event"
import { AnimatedSpinner } from "../../../../globalComponents/animatedSpinner"

interface DayDrawerProps {
	athleteActivities: AthleteActivities | null
	apiCallsInProgress: number
	selectedDate: Date
}

const DayDrawer = ({ athleteActivities, apiCallsInProgress, selectedDate }: DayDrawerProps) => {
	const activities = athleteActivities?.filter((activity) => {
		const date = new Date(activity.start)
		return date.toDateString() === selectedDate.toDateString()
	})
	if (apiCallsInProgress > 0) return <AnimatedSpinner height="3rem" />
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
