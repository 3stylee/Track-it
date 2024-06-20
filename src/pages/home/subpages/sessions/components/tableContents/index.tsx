import React from "react"
import { AthleteActivities } from "../../../activitiesList/models"
import { ROUTE_PATHS } from "../../../../../../constants/constants"
import { useNavigate } from "react-router-dom"
import { getMapboxEndpoint } from "../../../../utils/getMapboxEndpoint"
import decodePolyline from "../../../../utils/decodePolyline"
import { convertISOToDDMMYY } from "../../../../utils/convertISOtoDDMMYY"
import { ActivityMap, StyledRow } from "./components"
import connect from "./connect"
import { useTheme } from "@emotion/react"

export interface TableContentsProps {
	sessions: AthleteActivities
	sessionGroups: number[][]
}

const TableContents = ({ sessionGroups, sessions }: TableContentsProps) => {
	const navigate = useNavigate()
	const theme = useTheme()

	return (
		<>
			{sessionGroups.map((group) => {
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
	)
}

export default connect(TableContents)
