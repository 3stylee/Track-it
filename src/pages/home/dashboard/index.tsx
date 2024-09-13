import React, { useEffect } from "react"
import { TitleHeader } from "./titleHeader"
import { PageContainer } from "./components"
import MileageChart from "./mileageChart"
import RecentActivities from "./recentActivities"
import connect from "./connect"
import { getActivityData } from "../../../utils/getActivityData"
import { Col, Row } from "react-bootstrap"
import { LoadInitialAthleteActivities } from "../../../models/athlete"
import TrainingLoad from "./trainingLoad"
import HRZones from "./hrZones"

interface DashboardProps {
	gotSufficientActivities: boolean
	gotAthleteData: boolean
	loadInitialAthleteActivities: LoadInitialAthleteActivities
	loadAthleteData: (athleteID: number) => void
}

export const Dashboard = ({
	gotSufficientActivities,
	gotAthleteData,
	loadAthleteData,
	loadInitialAthleteActivities,
}: DashboardProps) => {
	useEffect(() => {
		if (!gotSufficientActivities) {
			getActivityData(loadInitialAthleteActivities)
		}
	}, [])

	useEffect(() => {
		if (gotSufficientActivities && !gotAthleteData) {
			loadAthleteData(parseInt(localStorage.getItem("uId") || ""))
		}
	}, [gotSufficientActivities, gotAthleteData])

	return (
		<PageContainer>
			<TitleHeader />
			<Row className="g-2">
				<Col lg={8} className="mb-2">
					<MileageChart />
				</Col>
				<Col lg={4} className="mb-2">
					<RecentActivities />
				</Col>
			</Row>
			<Row className="g-2">
				<Col lg={4} className="mb-2">
					<HRZones />
				</Col>
				<Col lg={8} className="mb-2">
					<TrainingLoad />
				</Col>
			</Row>
		</PageContainer>
	)
}

export default connect(Dashboard)
