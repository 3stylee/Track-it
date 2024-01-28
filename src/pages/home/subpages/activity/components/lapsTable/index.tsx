import React, { useContext } from "react"
import { getMinsFromSeconds } from "../../../../utils/getMinsFromSeconds"
import ThemeContext from "../../../../../../theme/themeContext"
import { THEMES } from "../../../../../../constants"
import { CardBody } from "./components"

export const LapsTable = ({ laps }: any) => {
	const { theme } = useContext(ThemeContext)
	return (
		<div className={`card ${theme === THEMES.DARK && "text-white bg-dark"} w-100`}>
			<div className="card-header">
				<p className="m-0">Recent Activities</p>
			</div>
			<CardBody className="card-body">
				{Array.isArray(laps) && laps.length > 0 ? (
					<table className={`table ${theme === THEMES.DARK && "table-dark"}`}>
						<thead>
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
			</CardBody>
		</div>
	)
}
