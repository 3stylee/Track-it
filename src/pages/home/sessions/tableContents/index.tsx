import React from "react"
import { ROUTE_PATHS } from "../../../../constants/constants"
import { useNavigate } from "react-router-dom"
import { getMapboxEndpoint } from "../../../../utils/getMapboxEndpoint"
import decodePolyline from "../../../../utils/decodePolyline"
import { convertISOToDDMMYY } from "../../../../utils/convertISOtoDDMMYY"
import { ActivityMap, StyledRow } from "./components"
import connect from "./connect"
import { useTheme } from "@emotion/react"
import { AthleteActivities } from "../../../../models/activities"
import { filterSessionGroups } from "../../../../utils/filterSesssionGroups"

export interface TableContentsProps {
	sessions: AthleteActivities
	sessionGroups: number[][]
	searchText: string
	sortOption: number
}

const TableContents = ({ sessionGroups, sessions, searchText, sortOption }: TableContentsProps) => {
	const navigate = useNavigate()
	const theme = useTheme()
	const filteredGroups = filterSessionGroups(sessionGroups, sessions, searchText, sortOption)

	return filteredGroups.length > 0 ? (
		<>
			{filteredGroups.map((group) => {
				const firstGroupId = group[0]
				const firstGroupSession = sessions.find((session) => session.id === firstGroupId)
				const link =
					group.length > 1
						? ROUTE_PATHS.SESSIONS + `/${firstGroupId}`
						: ROUTE_PATHS.ACTIVITY + `?id=${firstGroupId}`
				return firstGroupSession ? (
					<StyledRow key={firstGroupId} onClick={() => navigate(link)}>
						<td>
							{firstGroupSession.polyline && (
								<ActivityMap
									src={getMapboxEndpoint(
										decodePolyline(firstGroupSession.polyline),
										theme.name,
										"40x40"
									)}
									alt="session map"
								/>
							)}
							{firstGroupSession.title}
						</td>
						<td>{convertISOToDDMMYY(firstGroupSession.start)}</td>
						<td>{group.length}</td>
					</StyledRow>
				) : null
			})}
		</>
	) : (
		<tr>
			<td>No sessions found</td>
		</tr>
	)
}

export default connect(TableContents)
