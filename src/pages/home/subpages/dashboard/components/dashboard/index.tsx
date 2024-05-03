import React, { useEffect } from "react"
import { TitleHeader } from "../titleHeader"
import { PageContainer } from "./components"
import MileageChart from "../mileageChart"
import RecentActivities from "../recentActivities"
import connect from "./connect"
import { getActivityData } from "../../../../utils/getActivityData"
import { AnimatedSpinner } from "../../../../../../globalComponents/animatedSpinner"
import { Col, Row } from "react-bootstrap"
import { AthleteActivities, DataFlags } from "../../../activitiesList/models"
import { LoadAthleteActivities } from "../../models"
//import { YearStats } from "../yearStats"

interface DashboardProps {
	athleteActivities: AthleteActivities
	dataFlags: DataFlags
	loadAthleteActivities: LoadAthleteActivities
	loadAthleteData: (athleteID: number) => void
	apiCallsInProgress: number
}

export const Dashboard = ({
	athleteActivities,
	dataFlags: { gotAthleteData, gotInitialActivities },
	loadAthleteActivities,
	loadAthleteData,
	apiCallsInProgress,
}: DashboardProps) => {
	useEffect(() => {
		if (!gotInitialActivities) getActivityData(loadAthleteActivities)
		if (athleteActivities.length > 0) {
			const athleteID = athleteActivities[0].athlete.id
			if (!gotAthleteData) loadAthleteData(athleteID)
		}
	}, [athleteActivities])

	if (apiCallsInProgress > 0) return <AnimatedSpinner />
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
			{/* <Row>
				<Col sm={12}>
					<YearStats />
				</Col>
			</Row> */}
		</PageContainer>
	)
}

export default connect(Dashboard)
