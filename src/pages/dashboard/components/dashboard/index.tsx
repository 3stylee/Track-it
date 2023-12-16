import React from "react"
import { TitleHeader } from "../titleHeader"
import { DataContainer, PageContainer } from "./components"
import { MileageChart } from "../mileageChart"

export const Dashboard = () => {
	return (
		<PageContainer>
			<TitleHeader />
			<DataContainer className="row row-cols-1 row-cols-lg-2 g-4">
				<MileageChart />
			</DataContainer>
		</PageContainer>
	)
}

export default Dashboard
