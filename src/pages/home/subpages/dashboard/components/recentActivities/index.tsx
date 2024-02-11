import React from "react"
import connect from "./connect"
import { convertISOToDDMMYY } from "../../../../utils/convertISOtoDDMMYY"
import { MAX_RECENT_ACTIVITIES } from "../../../../../../constants"
import { Body } from "./components"
import { useTheme } from "@emotion/react"
import { Card } from "react-bootstrap"

interface RecentActivitiesProps {
	athleteActivities: any
}

export const RecentActivities = ({ athleteActivities }: RecentActivitiesProps) => {
	let filteredData
	if (Array.isArray(athleteActivities)) {
		filteredData = athleteActivities.slice(0, MAX_RECENT_ACTIVITIES)
	}
	const theme = useTheme()

	return (
		<Card text={theme.bootstrap.textColor} bg={theme.bootstrap.background} className="h-100">
			<Card.Header>
				<p className="m-0">Recent Activities</p>
			</Card.Header>
			<Body>
				{filteredData ? (
					<table className={`table table-bordered m-0 table-${theme.bootstrap.background}`}>
						<thead className="thead-primary">
							<tr>
								<th scope="col">Date</th>
								<th scope="col">Name</th>
								<th scope="col">Distance</th>
							</tr>
						</thead>
						<tbody>
							{filteredData.map((item: any) => (
								<tr key={item.id}>
									<th scope="row">{convertISOToDDMMYY(item.start)}</th>
									<td>{item.title}</td>
									<td>{(item.distance / 1000).toFixed(2) + " km"}</td>
								</tr>
							))}
						</tbody>
					</table>
				) : (
					<div>Looks like you don't have any recent activities</div>
				)}
			</Body>
		</Card>
	)
}

export default connect(RecentActivities)
