import React from "react"
import { getMinsFromSeconds } from "../../../../utils/getMinsFromSeconds"
import { CardBody, CardContainer, CardHeader, TableHeader } from "./components"
import { useTheme } from "@emotion/react"
import FeatherIcon from "feather-icons-react"

export const LapsTable = ({ laps }: any) => {
	const theme = useTheme()
	if (!Array.isArray(laps) || laps.length < 1) return null
	return (
		<CardContainer className={`card text-${theme.bootstrap.textColor} bg-${theme.bootstrap.background} h-100`}>
			<CardHeader>
				<p>Laps</p>
			</CardHeader>
			<CardBody className="card-body">
				<table className={`table table-${theme.bootstrap.background}`}>
					<thead>
						<tr>
							<th scope="col">#</th>
							<th scope="col">
								<TableHeader>
									Distance
									<FeatherIcon icon="map-pin" size={"1rem"} />
								</TableHeader>
							</th>
							<th scope="col">
								<TableHeader>
									Time
									<FeatherIcon icon="clock" size={"1rem"} />
								</TableHeader>
							</th>
							<th scope="col">
								<TableHeader>
									Pace
									<FeatherIcon icon="watch" size={"1rem"} />
								</TableHeader>
							</th>
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
