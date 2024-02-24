import React from "react"
import { getMinsFromSeconds } from "../../../../utils/getMinsFromSeconds"
import { CardBody, CardContainer, CardHeader, HeadingText, TableHeader, TableRow } from "./components"
import { useTheme } from "@emotion/react"
import FeatherIcon from "feather-icons-react"
import { Table } from "react-bootstrap"
import connect from "./connect"
import { categoriseLaps } from "../../../../utils/categoriseLaps"
import { CurrentActivity, Lap } from "../../models"
import { Units } from "../../../../../../models"

interface LapsTableProps {
	laps: Lap[]
	units: Units
	currentActivity: CurrentActivity
}

const LapsTable = ({ laps, units, currentActivity }: LapsTableProps) => {
	const theme = useTheme()
	if (!Array.isArray(laps) || laps.length < 1) return null
	const session = currentActivity.predictedType === "Session"
	let lapCategories: string[] = []
	if (session) {
		lapCategories = categoriseLaps(laps)
	}
	const headers = [
		{ name: "Distance", icon: "map-pin" },
		{ name: "Time", icon: "clock" },
		{ name: "Pace", icon: "watch" },
	]
	return (
		<CardContainer className={`card text-${theme.bootstrap.textColor} bg-${theme.bootstrap.background} h-100`}>
			<CardHeader>
				<p>Laps</p>
			</CardHeader>
			<CardBody className="card-body">
				<Table variant={theme.bootstrap.background} striped className="mb-0">
					<TableHeader>
						<tr>
							<th scope="col">#</th>
							{headers.map((header) => (
								<th scope="col" key={header.name}>
									<HeadingText>
										{header.name}
										<FeatherIcon icon={header.icon} size={"1rem"} />
									</HeadingText>
								</th>
							))}
							{session && (
								<th scope="col">
									<HeadingText>Type</HeadingText>
								</th>
							)}
						</tr>
					</TableHeader>
					<tbody>
						{laps.map((lap: Lap, index) => (
							<TableRow key={lap.id} session={session} muted={lapCategories[index] === "Recovery"}>
								<td>{lap.name}</td>
								<td>{(lap.distance / units.meters).toFixed(2) + ` ${units.unitString}`}</td>
								<td>{getMinsFromSeconds(lap.moving_time)}</td>
								<td>
									{lap.average_speed > 0
										? getMinsFromSeconds(units.meters / lap.average_speed) + `/ ${units.unitString}`
										: "--"}
								</td>
								{session && <td>{lapCategories[index]}</td>}
							</TableRow>
						))}
					</tbody>
				</Table>
			</CardBody>
		</CardContainer>
	)
}

export default connect(LapsTable)
