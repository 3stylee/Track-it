import React, { useContext } from "react"
import { getMinsFromSeconds } from "../../../../utils/getMinsFromSeconds"
import ThemeContext from "../../../../../../theme/themeContext"
import { THEMES } from "../../../../../../constants"
import { CardBody, CardContainer, CardHeader } from "./components"

export const LapsTable = ({ laps }: any) => {
	const { theme } = useContext(ThemeContext)
	if (!Array.isArray(laps) || laps.length < 1) return null
	return (
		<CardContainer className={`card ${theme === THEMES.DARK && "text-white bg-dark"} h-100`}>
			<CardHeader>
				<p>Laps</p>
			</CardHeader>
			<CardBody className="card-body">
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
			</CardBody>
		</CardContainer>
	)
}
