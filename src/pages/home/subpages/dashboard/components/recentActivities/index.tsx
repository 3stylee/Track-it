import React, { useContext } from "react"
import connect from "./connect"
import { convertISOToDDMMYY } from "../../../../utils/convertISOtoDDMMYY"
import { MAX_RECENT_ACTIVITIES, THEMES } from "../../../../../../constants"
import { CardBody } from "./components"
import ThemeContext from "../../../../../../theme/themeContext"

interface RecentActivitiesProps {
	athleteActivities: any
}

export const RecentActivities = ({ athleteActivities }: RecentActivitiesProps) => {
	let filteredData
	if (Array.isArray(athleteActivities)) {
		filteredData = athleteActivities.slice(0, MAX_RECENT_ACTIVITIES)
	}
	const { theme } = useContext(ThemeContext)

	return (
		<div className={`card ${theme === THEMES.DARK && "text-white bg-dark"} h-100`}>
			<div className="card-header">
				<p className="m-0">Recent Activities</p>
			</div>
			<CardBody className="card-body">
				{filteredData ? (
					<table className={`table table-bordered m-0 ${theme === THEMES.DARK && "table-dark"}`}>
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
									<th scope="row">{convertISOToDDMMYY(item.start_date)}</th>
									<td>{item.name}</td>
									<td>{(item.distance / 1000).toFixed(2) + " km"}</td>
								</tr>
							))}
						</tbody>
					</table>
				) : (
					<div>Looks like you don't have any recent activities</div>
				)}
			</CardBody>
		</div>
	)
}

export default connect(RecentActivities)
