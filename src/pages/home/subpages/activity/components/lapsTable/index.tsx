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
import { LAP_TABLE_HEADERS, SESSION_TYPES } from "../../../../../../constants"

interface LapsTableProps {
	laps: Lap[]
	units: Units
	currentActivity: CurrentActivity
}

const LapsTable = ({ laps, units, currentActivity }: LapsTableProps) => {
	const {
		bootstrap: { textColor, background },
	} = useTheme()
	if (!Array.isArray(laps) || laps.length < 1) return null
	const session = SESSION_TYPES.includes(currentActivity.predictedType)
	let lapCategories: string[] = []
	if (session) {
		lapCategories = categoriseLaps(laps)
	}
	return (
		<CardContainer className={`card text-${textColor} bg-${background} h-100`}>
			<CardHeader>
				<p>Laps</p>
			</CardHeader>
			<CardBody className="card-body">
				<Table variant={background} striped className="mb-0">
					<TableHeader>
						<tr>
							<th scope="col">#</th>
							{LAP_TABLE_HEADERS.map(({ name, icon }) => (
								<th scope="col" key={name}>
									<HeadingText>
										{name}
										<FeatherIcon icon={icon} size={"1rem"} />
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
