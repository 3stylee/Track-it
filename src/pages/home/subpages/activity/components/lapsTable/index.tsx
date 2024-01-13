import React from "react"
import { getMinsFromSeconds } from "../../../../utils/getMinsFromSeconds"
import { TableCard } from "./components"

export const LapsTable = ({ laps }: any) => {
	return (
		<TableCard className="card w-100">
			<div className="card-header">Laps</div>
			<div className="card-body">
				{Array.isArray(laps) && laps.length > 0 ? (
					<table className="table">
						<thead className="thead-dark">
							<tr>
								<th scope="col">#</th>
								<th scope="col">Distance</th>
								<th scope="col">Time</th>
								<th scope="col">Pace</th>
							</tr>
						</thead>
						<tbody>
							{laps.map((lap: any) => (
								<tr key={lap.id}>
									<td>{lap.name}</td>
									<td>{(lap.distance / 1000).toFixed(2) + " km"}</td>
									<td>{getMinsFromSeconds(lap.moving_time)}</td>
									<td>
										{lap.average_speed > 0
											? getMinsFromSeconds(1000 / lap.average_speed) + " /km"
											: "--"}
									</td>
								</tr>
							))}
						</tbody>
					</table>
				) : (
					<div>Error getting laps</div>
				)}
			</div>
		</TableCard>
	)
}
