import React, { useEffect } from "react"
import { TitleHeader } from "../titleHeader"
import { DataContainer, PageContainer } from "./components"
import { MileageChart } from "../mileageChart"
import RecentActivities from "../recentActivities"
import { QuickStats } from "../quickStats"
import connect from "./connect"
import { DASHBOARD_SORT_OPTIONS, INITIAL_DATA_MESSAGE } from "../../../../constants"
import { getDate } from "../../utils/getDate"
import { ProgressContainer } from "../../../../globalComponents/progressContainer/components"

interface DashboardProps {
	dashboardSortMetric: string
	activityData: any
	loadActivityData: any
	apiCallsInProgress: number
}

export const Dashboard = ({
	dashboardSortMetric,
	activityData,
	loadActivityData,
	apiCallsInProgress,
}: DashboardProps) => {
	useEffect(() => {
		if (activityData.text === INITIAL_DATA_MESSAGE) {
			const startOfMonth = getDate(DASHBOARD_SORT_OPTIONS.MONTH)
			// we need data for up to 6 days before the month start for mileage graph
			startOfMonth.setDate(startOfMonth.getDate() - 6)
			loadActivityData(null, startOfMonth.getTime() / 1000)
		}
	}, [])

	return (
		<PageContainer>
			{apiCallsInProgress > 0 ? (
				<ProgressContainer>
					<div className="spinner-border" />
				</ProgressContainer>
			) : (
				<>
					<TitleHeader />
					<DataContainer>
						<div className="row row-cols-1 row-cols-md-2">
							<div className="col">
								<MileageChart dashboardSortMetric={dashboardSortMetric} />
							</div>
							<div className="col">
								<RecentActivities dashboardSortMetric={dashboardSortMetric} />
							</div>
						</div>
						<div className="row row-cols-1 mt-4">
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
