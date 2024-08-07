import React, { useState } from "react"
import { AnimatedSpinner } from "../../../../globalComponents/animatedSpinner"
import { Table } from "react-bootstrap"
import { FilterContainer, Header, NoSessions, PageTitle, SortableHeader, StyledRow, TableContainer } from "./components"
import connect from "./connect"
import { useTheme } from "@emotion/react"
import TableContents from "../tableContents"
import { Searchbar } from "../searchbar"
import { SortChevrons } from "../sortChevrons"
import { SessionGroups } from "../../../../models/sessions"
import { NO_SESSIONS } from "../../../../constants/constants"

export interface GroupCardsProps {
	sessionGroups: SessionGroups
	apiCallsInProgress: number
}

export const GroupsTable = ({ sessionGroups, apiCallsInProgress }: GroupCardsProps) => {
	const theme = useTheme()
	const [searchText, setSearchText] = useState("")
	const [sortOption, setSortOption] = useState(0)
	const sortableHeaders = ["Last Completed", "Times Completed"]

	const handleClick = (index: number) => () => {
		if (index === 0) setSortOption(sortOption === 0 ? 1 : 0)
		else setSortOption(sortOption === 2 ? 3 : 2)
	}

	if (apiCallsInProgress > 0) return <AnimatedSpinner height="75vh" />
	return (
		<div>
			{Object.keys(sessionGroups).length !== 0 ? (
				<>
					<Header>
						<FilterContainer>
							<PageTitle>Your Sessions</PageTitle>
							<Searchbar searchText={searchText} setSearchText={setSearchText} />
						</FilterContainer>
					</Header>
					<TableContainer>
						<Table variant={theme.bootstrap.background} striped className="mb-0">
							<thead className="thead-light">
								<StyledRow>
									<th scope="col">Session</th>
									{sortableHeaders.map((header, index) => (
										<th scope="col" key={header}>
											<SortableHeader onClick={handleClick(index)}>
												{header}
												<SortChevrons number={index} sortOption={sortOption} />
											</SortableHeader>
										</th>
									))}
								</StyledRow>
							</thead>
							<tbody>
								<TableContents
									sessionGroups={sessionGroups}
									searchText={searchText}
									sortOption={sortOption}
								/>
							</tbody>
						</Table>
					</TableContainer>
				</>
			) : (
				<NoSessions>{NO_SESSIONS}</NoSessions>
			)}
		</div>
	)
}

export default connect(GroupsTable)
