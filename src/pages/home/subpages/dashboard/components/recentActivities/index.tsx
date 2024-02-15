import React from "react"
import connect from "./connect"
import { convertISOToDDMMYY } from "../../../../utils/convertISOtoDDMMYY"
import { MAX_RECENT_ACTIVITIES } from "../../../../../../constants"
import { Body, CardHeader, TableHeader, TableRow } from "./components"
import { useTheme } from "@emotion/react"
import { Card, Table } from "react-bootstrap"
import { Units } from "../../../../../../config/models"

interface RecentActivitiesProps {
	athleteActivities: any
	units: Units
}

export const RecentActivities = ({ athleteActivities, units }: RecentActivitiesProps) => {
	let filteredData
	if (Array.isArray(athleteActivities)) {
		filteredData = athleteActivities.slice(0, MAX_RECENT_ACTIVITIES)
	}
	const theme = useTheme()

	return (
		<Card text={theme.bootstrap.textColor} bg={theme.bootstrap.background} className="h-100">
			<Card.Header>
				<CardHeader>Recent Activities</CardHeader>
			</Card.Header>
			<Body>
				{filteredData ? (
					<Table variant={theme.bootstrap.background} striped className="mb-0">
						<TableHeader className="thead-light">
							<tr>
								<th scope="col">Date</th>
								<th scope="col">Name</th>
								<th scope="col">Distance</th>
							</tr>
						</TableHeader>
						<tbody>
							{filteredData.map((item: any) => (
								<TableRow key={item.id}>
									<td>{convertISOToDDMMYY(item.start)}</td>
									<td>{item.title}</td>
									<td>{(item.distance / units.meters).toFixed(2) + ` ${units.unitString}`}</td>
								</TableRow>
							))}
						</tbody>
					</Table>
				) : (
					<div>Looks like you don't have any recent activities</div>
				)}
			</Body>
		</Card>
	)
}

export default connect(RecentActivities)
