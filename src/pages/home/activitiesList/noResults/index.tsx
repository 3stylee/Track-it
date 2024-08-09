import React from "react"
import { NoResultsContainer, NoResultsDescription, NoResultsTitle } from "./components"
import { NO_ACTIVITIES, NO_RESULTS } from "../../../../constants/constants"
import { AlertCircle } from "react-feather"

interface NoResultsProps {
	filterApplied: boolean
}

export const NoResults = ({ filterApplied }: NoResultsProps) => {
	return (
		<NoResultsContainer>
			<AlertCircle size="6.25rem" />
			<NoResultsTitle>No Results</NoResultsTitle>
			<NoResultsDescription>{filterApplied ? NO_RESULTS : NO_ACTIVITIES}</NoResultsDescription>
		</NoResultsContainer>
	)
}
