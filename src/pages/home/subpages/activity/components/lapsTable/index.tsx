import React, { useContext } from "react"
import { getMinsFromSeconds } from "../../../../utils/getMinsFromSeconds"
import ThemeContext from "../../../../../../theme/themeContext"
import { THEMES } from "../../../../../../constants"
import { Card } from "../../../../../../globalComponents/bootstrapCard"

export const LapsTable = ({ laps }: any) => {
	const { theme } = useContext(ThemeContext)
	return (
		<Card
			cardHeader={<div className="card-header">Laps</div>}
			styles={{ "max-height": "400px", "overflow-y": "scroll", width: "100%" }}>
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
		</Card>
	)
}
