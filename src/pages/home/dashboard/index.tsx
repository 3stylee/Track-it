import React, { useEffect } from "react"
import { TitleHeader } from "./titleHeader"
import { PageContainer } from "./components"
import MileageChart from "./mileageChart"
import RecentActivities from "./recentActivities"
import connect from "./connect"
import { getActivityData } from "../../../utils/getActivityData"
import { AnimatedSpinner } from "../../../globalComponents/animatedSpinner"
import { Col, Row } from "react-bootstrap"
import ApiError from "../../../globalComponents/apiError"
import { LoadInitialAthleteActivities } from "../../../models/athlete"

interface DashboardProps {
	gotSufficientActivities: boolean
	gotAthleteData: boolean
	athleteId: number
	apiError: string | object
	apiCallsInProgress: number
	loadInitialAthleteActivities: LoadInitialAthleteActivities
	loadAthleteData: (athleteID: number) => void
}

export const Dashboard = ({
	gotSufficientActivities,
	gotAthleteData,
	athleteId,
	apiCallsInProgress,
	apiError,
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
			loadAthleteData(athleteId)
		}
	}, [gotSufficientActivities, gotAthleteData])

	if (apiCallsInProgress > 0) return <AnimatedSpinner />
	if (apiError !== "") return <ApiError />
	return (
		<PageContainer>
			<TitleHeader />
			<Row>
				<Col lg={8} className="mb-4">
					<MileageChart />
				</Col>
				<Col lg={4} className="mb-4">
					<RecentActivities />
				</Col>
			</Row>
		</PageContainer>
	)
}

export default connect(Dashboard)
