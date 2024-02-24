import React, { useEffect } from "react"
import DataContainer from "../dataContainer"
import { PageContainer } from "./components"
import connect from "./connect"
import { AnimatedSpinner } from "../../../../../../globalComponents/animatedSpinner"
import { getActivityData } from "../../../../utils/getActivityData"
import { DataFlags } from "../../models"

interface ActivitiesListProps {
	apiCallsInProgress: number
	dataFlags: DataFlags
	loadAthleteActivities: () => void
}

export const ActivitiesList = ({
	dataFlags: { gotInitialActivities },
	apiCallsInProgress,
	loadAthleteActivities,
}: ActivitiesListProps) => {
	useEffect(() => {
		if (!gotInitialActivities) getActivityData(loadAthleteActivities)
	}, [])

	if (apiCallsInProgress > 0) return <AnimatedSpinner />
	return (
		<PageContainer>
			<DataContainer />
		</PageContainer>
	)
}

export default connect(ActivitiesList)
