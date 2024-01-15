import React, { useEffect } from "react"
import { TitleHeader } from "../titleHeader"
import { DataContainer, PageContainer } from "./components"
import { MileageChart } from "../mileageChart"
import RecentActivities from "../recentActivities"
import connect from "./connect"
import { getActivityDataIfNeeded } from "../../../../utils/getActivityDataIfNeeded"
import { getAthleteDataIfNeeded } from "../../../../utils/getAthleteDataIfNeeded"
import { AnimatedSpinner } from "../../../../../../globalComponents/animatedSpinner"

interface DashboardProps {
	athleteActivities: any
	athleteData: any
	loadAthleteActivities: any
	loadAthleteData: any
	apiCallsInProgress: number
}

export const Dashboard = ({
	athleteActivities,
	loadAthleteActivities,
	athleteData,
	loadAthleteData,
	apiCallsInProgress,
}: DashboardProps) => {
	useEffect(() => {
		getActivityDataIfNeeded(athleteActivities.text, loadAthleteActivities)
		if (Array.isArray(athleteActivities)) {
			const athleteID = athleteActivities[0].athlete.id
			getAthleteDataIfNeeded(athleteData.text, loadAthleteData, athleteID)
		}
	}, [athleteActivities])

	return (
		<PageContainer>
			{apiCallsInProgress > 0 ? (
				<AnimatedSpinner />
			) : (
				<>
					<TitleHeader />
					<DataContainer>
						<div className="row row-cols-1 row-cols-xl-2">
							<div className="col mb-4">
								<MileageChart />
							</div>
							<div className="col mb-4">
								<RecentActivities />
							</div>
						</div>
					</DataContainer>
				</>
			)}
		</PageContainer>
	)
}

export default connect(Dashboard)
