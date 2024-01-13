import React from "react"
import connect from "./connect"
import { getDate } from "../../../../utils/getDate"
import { convertISOToDDMMYY } from "../../../../utils/convertISOtoDDMMYY"
import { MAX_RECENT_ACTIVITIES } from "../../../../../../constants"
import { CardBody } from "./components"

interface RecentActivitiesProps {
	athleteActivities: any
	dashboardSortMetric: string
}

export const RecentActivities = ({ athleteActivities, dashboardSortMetric }: RecentActivitiesProps) => {
	let filteredData = athleteActivities

	if (Array.isArray(athleteActivities)) {
		const cutOffDate = getDate(dashboardSortMetric)
		filteredData = athleteActivities
			.filter((activity) => activity.start_date > cutOffDate.toISOString())
			.slice(0, MAX_RECENT_ACTIVITIES)
	}

	return (
		<div className="card h-100">
			<div className="card-header">
				<h5 className="pt-1">Recent Activities</h5>
			</div>
			<CardBody className="card-body">
				{Array.isArray(filteredData) && filteredData.length > 0 ? (
					<table className="table">
						<thead className="thead-dark">
							<tr>
								<th scope="col">Date</th>
								<th scope="col">Name</th>
								<th scope="col">Distance</th>
							</tr>
						</thead>
						<tbody>
							{filteredData.map((item: any) => (
								<tr key={item.id}>
									<th scope="row">{convertISOToDDMMYY(item.start_date)}</th>
									<td>{item.name}</td>
									<td>{(item.distance / 1000).toFixed(2) + " km"}</td>
								</tr>
							))}
						</tbody>
					</table>
				) : (
					<div>Looks like you don't have any activities this {dashboardSortMetric}</div>
				)}
			</CardBody>
		</div>
	)
}

export default connect(RecentActivities)
