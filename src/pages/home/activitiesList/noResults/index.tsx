import React from "react"
import { NoResultsContainer, NoResultsDescription, NoResultsTitle } from "./components"
import { NO_RESULTS } from "../../../../constants/constants"
import { AlertCircle } from "react-feather"

export const NoResults = () => {
	return (
		<NoResultsContainer>
			<AlertCircle size="6.25rem" />
			<NoResultsTitle>No Results</NoResultsTitle>
			<NoResultsDescription>{NO_RESULTS}</NoResultsDescription>
		</NoResultsContainer>
	)
}
