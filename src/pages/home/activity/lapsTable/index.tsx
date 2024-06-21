import React from "react"
import { getMinsFromSeconds } from "../../../../utils/getMinsFromSeconds"
import { CardBody, CardContainer, CardHeader, HeadingText, TableHeader, TableRow } from "./components"
import { useTheme } from "@emotion/react"
import FeatherIcon from "feather-icons-react"
import { Table } from "react-bootstrap"
import connect from "./connect"
import { categoriseLaps } from "../../../../utils/categoriseLaps"
import { Units } from "../../../../models/state"
import { LAP_TABLE_HEADERS, SESSION_TYPES } from "../../../../constants/constants"
import { Lap } from "../../../../models/activities"

interface LapsTableProps {
	laps: Lap[]
	units: Units
	predictedType: string
}

const LapsTable = ({ laps, units: { unitString, meters }, predictedType }: LapsTableProps) => {
	const {
		bootstrap: { textColor, background },
	} = useTheme()
	if (!Array.isArray(laps) || laps.length < 1) return null
	const session = SESSION_TYPES.includes(predictedType)
	const lapCategories = categoriseLaps(laps, session)
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
						{laps.map(({ id, name, distance, moving_time, average_speed }: Lap, index) => (
							<TableRow key={id} session={session} muted={lapCategories[index] === "Recovery"}>
								<td>{name}</td>
								<td>{(distance / meters).toFixed(2) + ` ${unitString}`}</td>
								<td>{getMinsFromSeconds(moving_time)}</td>
								<td>
									{average_speed > 0
										? getMinsFromSeconds(meters / average_speed) + `/ ${unitString}`
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
