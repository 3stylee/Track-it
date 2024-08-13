import React, { useState } from "react"
import { AnimatedSpinner } from "../../../../globalComponents/animatedSpinner"
import {
	FilterContainer,
	Header,
	NoSessions,
	PageTitle,
	SortableHeader,
	StyledContainer,
	StyledRow,
	TableContainer,
	TableHeader,
} from "./components"
import connect from "./connect"
import { useTheme } from "@emotion/react"
import TableContents from "../tableContents"
import { Searchbar } from "../searchbar"
import { SortChevrons } from "../sortChevrons"
import { SessionGroups } from "../../../../models/sessions"
import { NO_SESSIONS } from "../../../../constants/constants"
import { AlertCircle } from "react-feather"
import { Table } from "react-bootstrap"

export interface GroupCardsProps {
	sessionGroups: SessionGroups
	apiCallsInProgress: number
	dataError: boolean
	errorMessage: string
}

export const GroupsTable = ({ sessionGroups, apiCallsInProgress, dataError, errorMessage }: GroupCardsProps) => {
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
		<StyledContainer>
			<Header>
				<FilterContainer>
					<PageTitle>Your Sessions</PageTitle>
					<Searchbar searchText={searchText} setSearchText={setSearchText} />
				</FilterContainer>
			</Header>
			{Object.keys(sessionGroups).length !== 0 ? (
				<TableContainer>
					<Table variant={theme.bootstrap.background} hover className="mb-0">
						<TableHeader>
							<StyledRow>
								<th scope="col" className="ps-3">
									Session
								</th>
								{sortableHeaders.map((header, index) => (
									<th scope="col" key={header}>
										<SortableHeader onClick={handleClick(index)}>
											{header}
											<SortChevrons number={index} sortOption={sortOption} />
										</SortableHeader>
									</th>
								))}
							</StyledRow>
						</TableHeader>
						<tbody>
							<TableContents
								sessionGroups={sessionGroups}
								searchText={searchText}
								sortOption={sortOption}
							/>
						</tbody>
					</Table>
				</TableContainer>
			) : (
				<NoSessions>
					{dataError ? (
						<>
							<AlertCircle size={64} />
							{errorMessage}
						</>
					) : (
						NO_SESSIONS
					)}
				</NoSessions>
			)}
		</StyledContainer>
	)
}

export default connect(GroupsTable)
