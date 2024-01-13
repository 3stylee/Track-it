import React, { useEffect } from "react"
import DataContainer from "../dataContainer"
import { PageContainer } from "./components"
import { getActivityDataIfNeeded } from "../../../../utils/getActivityDataIfNeeded"
import connect from "./connect"

interface ActivitiesListProps {
	athleteActivities: any
	loadAthleteActivities: any
}

export const ActivitiesList = ({ athleteActivities, loadAthleteActivities }: ActivitiesListProps) => {
	useEffect(() => {
		getActivityDataIfNeeded(athleteActivities.text, loadAthleteActivities)
	}, [])

	return (
		<PageContainer>
			<DataContainer />
		</PageContainer>
	)
}

export default connect(ActivitiesList)
