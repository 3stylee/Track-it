import React from "react"
import connect from "./connect"
import { getDate } from "../../../../utils/getDate"
import { convertISOToDDMMYY } from "../../../../utils/convertISOtoDDMMYY"
import { MAX_RECENT_ACTIVITIES } from "../../../../../../constants"

interface RecentActivitiesProps {
	activityData: any
	dashboardSortMetric: string
}

export const RecentActivities = ({ activityData, dashboardSortMetric }: RecentActivitiesProps) => {
	let filteredData = activityData

	if (Array.isArray(activityData)) {
		const cutOffDate = getDate(dashboardSortMetric)
		filteredData = activityData
			.filter((activity) => activity.start_date > cutOffDate.toISOString())
			.slice(0, MAX_RECENT_ACTIVITIES)
	}

	return (
		<div className="card h-100">
			<div className="card-header">
				<h5 className="pt-1">Recent Activities</h5>
			</div>
			<div className="card-body">
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
			</div>
		</div>
	)
}

export default connect(RecentActivities)
