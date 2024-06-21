import React from "react"
import { NoResultsContainer, NoResultsDescription, NoResultsTitle } from "./components"
import FeatherIcon from "feather-icons-react"
import { NO_RESULTS } from "../../../../constants/constants"

export const NoResults = () => {
	return (
		<NoResultsContainer>
			<FeatherIcon icon="alert-circle" size="6.25rem" />
			<NoResultsTitle>No Results</NoResultsTitle>
			<NoResultsDescription>{NO_RESULTS}</NoResultsDescription>
		</NoResultsContainer>
	)
}
