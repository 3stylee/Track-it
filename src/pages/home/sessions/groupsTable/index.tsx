import React, { useState } from "react"
import { AnimatedSpinner } from "../../../../globalComponents/animatedSpinner"
import { Table } from "react-bootstrap"
import {
	Container,
	FilterContainer,
	PageTitle,
	SessionCount,
	SortableHeader,
	StyledRow,
	TableContainer,
} from "./components"
import connect from "./connect"
import { useTheme } from "@emotion/react"
import TableContents from "../tableContents"
import { Searchbar } from "../searchbar"
import { SortChevrons } from "../sortChevrons"

export interface GroupCardsProps {
	sessionGroups: number[][]
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

	if (apiCallsInProgress > 0) return <AnimatedSpinner height="90%" />
	return (
		<Container>
			<PageTitle>Your Sessions</PageTitle>
			{sessionGroups.length > 0 ? (
				<>
					<FilterContainer>
						<SessionCount>{sessionGroups.length} Sessions</SessionCount>
						<Searchbar searchText={searchText} setSearchText={setSearchText} />
					</FilterContainer>
					<TableContainer>
						<Table variant={theme.bootstrap.background} striped className="mb-0">
							<thead className="thead-light">
								<StyledRow>
									<th scope="col">Session</th>
									{sortableHeaders.map((header, index) => (
										<th scope="col">
											<SortableHeader key={header} onClick={handleClick(index)}>
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
				<div>No sessions found</div>
			)}
		</Container>
	)
}

export default connect(GroupsTable)
