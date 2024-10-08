import React from "react"
import { getMinsFromSeconds } from "../../../../utils/getMinsFromSeconds"
import { CardContainer, CardHeader, HeadingText, StyledTable, TableHeader, TableRow } from "./components"
import { useTheme } from "@emotion/react"
import { CardBody } from "react-bootstrap"
import connect from "./connect"
import { categoriseLaps } from "../../../../utils/categoriseLaps"
import { Units } from "../../../../models/state"
import { LAP_TABLE_HEADERS, SESSION_TYPES } from "../../../../constants/constants"
import { Lap } from "../../../../models/activities"
import { Clock, MapPin, Watch } from "react-feather"
import { PlaceholderTable } from "./placeholderTable"

const iconMap = {
	"map-pin": MapPin,
	clock: Clock,
	watch: Watch,
} as any

interface LapsTableProps {
	laps: Lap[]
	units: Units
	predictedType: string
	loading: boolean
}

const LapsTable = ({ laps, units: { unitString, meters }, predictedType, loading }: LapsTableProps) => {
	const {
		bootstrap: { background },
	} = useTheme()
	const session = SESSION_TYPES.includes(predictedType)
	const lapCategories = categoriseLaps(laps, session)
	return (
		<CardContainer>
			<CardHeader>
				<p>Laps</p>
			</CardHeader>
			<CardBody>
				{loading ? (
					<PlaceholderTable />
				) : (
					<StyledTable variant={background} striped className="mb-0">
						<TableHeader>
							<tr>
								<th scope="col">#</th>
								{LAP_TABLE_HEADERS.map(({ name, icon }) => {
									const IconComponent = iconMap[icon]
									return (
										<th scope="col" key={name}>
											<HeadingText>
												{name}
												<IconComponent size={"1rem"} />
											</HeadingText>
										</th>
									)
								})}
								{session && (
									<th scope="col">
										<HeadingText>Type</HeadingText>
									</th>
								)}
							</tr>
						</TableHeader>
						<tbody>
							{laps?.map(({ id, name, distance, moving_time, average_speed }: Lap, index) => (
								<TableRow key={id} session={session} muted={lapCategories[index] === "Recovery"}>
									<td>{name.substring(4)}</td> {/* Remove the "Lap " prefix */}
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
					</StyledTable>
				)}
			</CardBody>
		</CardContainer>
	)
}

export default connect(LapsTable)
