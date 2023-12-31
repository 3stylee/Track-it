import React, { useEffect } from "react"
import DataContainer from "../dataContainer"
import { PageContainer } from "./components"
import { getDataIfNeededFromAPI } from "../../../../utils/getDataIfNeededFromAPI"
import connect from "./connect"

interface ActivitiesListProps {
	activityData: any
	loadActivityData: any
}

export const ActivitiesList = ({ activityData, loadActivityData }: ActivitiesListProps) => {
	useEffect(() => {
		getDataIfNeededFromAPI(activityData.text, loadActivityData)
	}, [])

	return (
		<PageContainer>
			<DataContainer />
		</PageContainer>
	)
}

export default connect(ActivitiesList)
