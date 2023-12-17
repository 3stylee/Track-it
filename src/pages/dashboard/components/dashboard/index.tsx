import React from "react"
import { TitleHeader } from "../titleHeader"
import { DataContainer, PageContainer } from "./components"
import MileageChart from "../mileageChart"
import { RecentActivities } from "../recentActivities"

export const Dashboard = () => {
	return (
		<PageContainer>
			<TitleHeader />
			<DataContainer className="row row-cols-1 row-cols-md-2">
				<div className="col">
					<MileageChart />
				</div>
				<div className="col">
					<RecentActivities />
				</div>
			</DataContainer>
		</PageContainer>
	)
}

export default Dashboard
