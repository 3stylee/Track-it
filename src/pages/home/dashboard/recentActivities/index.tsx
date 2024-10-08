import React from "react"
import connect from "./connect"
import { MAX_RECENT_ACTIVITIES, ROUTE_PATHS } from "../../../../constants/constants"
import { Body, CardHeader, NoActivities, StyledCard, TableHeader, TableRow } from "./components"
import { useTheme } from "@emotion/react"
import { Card, Table } from "react-bootstrap"
import { Units } from "../../../../models/state"
import { useNavigate } from "react-router-dom"
import { formatDate } from "date-fns"
import { AthleteActivities } from "../../../../models/activities"
import { PlaceholderTable } from "./placeholderTable"

interface RecentActivitiesProps {
	athleteActivities: AthleteActivities | null
	units: Units
	loading: boolean
}

export const RecentActivities = ({ athleteActivities, units, loading }: RecentActivitiesProps) => {
	let filteredData: AthleteActivities = []
	if (Array.isArray(athleteActivities)) {
		filteredData = athleteActivities.slice(0, MAX_RECENT_ACTIVITIES)
	}
	const theme = useTheme()
	const navigate = useNavigate()

	return (
		<StyledCard>
			<Card.Header>
				<CardHeader>Recent Activities</CardHeader>
			</Card.Header>
			<Body>
				{loading ? (
					<PlaceholderTable />
				) : filteredData.length > 0 ? (
					<Table variant={theme.bootstrap.background} striped className="mb-0">
						<TableHeader className="thead-light">
							<tr>
								<th scope="col">Date</th>
								<th scope="col">Name</th>
								<th scope="col">Distance</th>
							</tr>
						</TableHeader>
						<tbody>
							{filteredData.map(({ id, start, title, distance }: any) => {
								return (
									<TableRow key={id} onClick={() => navigate(ROUTE_PATHS.ACTIVITY + `?id=${id}`)}>
										<td>{formatDate(start, "dd/MM/yy")}</td>
										<td>{title}</td>
										<td>{(distance / units.meters).toFixed(2) + ` ${units.unitString}`}</td>
									</TableRow>
								)
							})}
						</tbody>
					</Table>
				) : (
					<NoActivities>Looks like you don't have any recent activities</NoActivities>
				)}
			</Body>
		</StyledCard>
	)
}

export default connect(RecentActivities)
