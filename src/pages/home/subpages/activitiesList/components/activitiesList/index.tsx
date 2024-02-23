import React, { useEffect } from "react"
import DataContainer from "../dataContainer"
import { PageContainer } from "./components"
import { getActivityDataIfNeeded } from "../../../../utils/getActivityDataIfNeeded"
import connect from "./connect"
import { AthleteActivities } from "../../models"
import { AnimatedSpinner } from "../../../../../../globalComponents/animatedSpinner"

interface ActivitiesListProps {
	athleteActivities: AthleteActivities
	apiCallsInProgress: number
	loadAthleteActivities: () => void
}

export const ActivitiesList = ({
	athleteActivities,
	apiCallsInProgress,
	loadAthleteActivities,
}: ActivitiesListProps) => {
	useEffect(() => {
		getActivityDataIfNeeded(athleteActivities, loadAthleteActivities)
	}, [])
	if (apiCallsInProgress > 0) return <AnimatedSpinner />
	return (
		<PageContainer>
			<DataContainer />
		</PageContainer>
	)
}

export default connect(ActivitiesList)
