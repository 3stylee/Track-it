import React, { useEffect } from "react"
import DataContainer from "../dataContainer"
import { PageContainer } from "./components"
import { getActivityDataIfNeeded } from "../../../../utils/getActivityDataIfNeeded"
import connect from "./connect"
import { AthleteActivities } from "../../models"

interface ActivitiesListProps {
	athleteActivities: AthleteActivities
	loadAthleteActivities: () => void
}

export const ActivitiesList = ({ athleteActivities, loadAthleteActivities }: ActivitiesListProps) => {
	useEffect(() => {
		getActivityDataIfNeeded(athleteActivities, loadAthleteActivities)
	}, [])

	return (
		<PageContainer>
			<DataContainer />
		</PageContainer>
	)
}

export default connect(ActivitiesList)
