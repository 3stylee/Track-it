import React, { useEffect } from "react"
import { TitleHeader } from "../titleHeader"
import { DataContainer, PageContainer } from "./components"
import { MileageChart } from "../mileageChart"
import RecentActivities from "../recentActivities"
import QuickStats from "../quickStats"
import connect from "./connect"
import { getActivityDataIfNeeded } from "../../../../utils/getActivityDataIfNeeded"
import { getAthleteDataIfNeeded } from "../../../../utils/getAthleteDataIfNeeded"
import { AnimatedSpinner } from "../../../../../../globalComponents/animatedSpinner"

interface DashboardProps {
	dashboardSortMetric: string
	athleteActivities: any
	athleteData: any
	loadAthleteActivities: any
	loadAthleteData: any
	apiCallsInProgress: number
}

export const Dashboard = ({
	dashboardSortMetric,
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
								<MileageChart dashboardSortMetric={dashboardSortMetric} />
							</div>
							<div className="col mb-4">
								<RecentActivities dashboardSortMetric={dashboardSortMetric} />
							</div>
						</div>
						<div className="row row-cols-1">
							<div className="col">
								<QuickStats />
							</div>
						</div>
					</DataContainer>
				</>
			)}
		</PageContainer>
	)
}

export default connect(Dashboard)
