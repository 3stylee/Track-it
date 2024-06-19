import React from "react"
import { AnimatedSpinner } from "../../../../../../globalComponents/animatedSpinner"
import { Table } from "react-bootstrap"
import { Container, PageTitle, SessionCount } from "./components"
import connect from "./connect"
import { useTheme } from "@emotion/react"
import TableContents from "../tableContents"

export interface GroupCardsProps {
	sessionGroups: number[][]
	apiCallsInProgress: number
}

export const GroupsTable = ({ sessionGroups, apiCallsInProgress }: GroupCardsProps) => {
	const theme = useTheme()

	if (apiCallsInProgress > 0) return <AnimatedSpinner height="90%" />
	return (
		<Container>
			<PageTitle>Your Sessions</PageTitle>
			{sessionGroups.length > 0 ? (
				<>
					<SessionCount>{sessionGroups.length} Sessions</SessionCount>
					<Table variant={theme.bootstrap.background} striped className="mb-0">
						<thead className="thead-light">
							<tr>
								<th scope="col">Session</th>
								<th scope="col">Last Completed</th>
								<th scope="col">Times Completed</th>
							</tr>
						</thead>
						<tbody>
							<TableContents sessionGroups={sessionGroups} />
						</tbody>
					</Table>
				</>
			) : (
				<div>No sessions found</div>
			)}
		</Container>
	)
}

export default connect(GroupsTable)
