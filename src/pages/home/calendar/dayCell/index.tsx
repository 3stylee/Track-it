import React, { useState } from "react"
import { DayNumber, ShowMore, StyledContainer } from "./components"
import { AthleteActivities } from "../../../../models/activities"
import Event from "../event"
import { Popup } from "../popup"
import { EventPlaceholder } from "../../../../globalComponents/placeholderUI/components"

interface DayCellProps {
	day: number
	activities: AthleteActivities | undefined
	loading?: boolean
}

export const DayCell = ({ day, activities, loading }: DayCellProps) => {
	const [showMore, setShowMore] = useState(false)

	const handleShowMore = () => {
		setShowMore(true)
	}
	if (!activities) return null
	activities.sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime())
	return (
		<StyledContainer>
			<DayNumber>{day}</DayNumber>
			{loading ? (
				Array.from({ length: (day % 3) + ((day / 2) % 2) }).map((_, i) => <EventPlaceholder key={i} />)
			) : (
				<>
					{activities?.slice(0, 3).map((activity) => (
						<Event key={activity.id} activity={activity} />
					))}
					{activities.length > 3 && (
						<>
							<ShowMore onClick={handleShowMore}>+{activities.length - 3} more</ShowMore>
							{showMore && <Popup activities={activities} setShowMore={setShowMore} />}
						</>
					)}
				</>
			)}
		</StyledContainer>
	)
}
