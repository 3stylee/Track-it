import React from "react"
import { NoResultsContainer, NoResultsDescription, NoResultsTitle } from "./components"
import FeatherIcon from "feather-icons-react"

export const NoResults = () => {
	return (
		<NoResultsContainer>
			<FeatherIcon icon="alert-circle" size="6.25rem" />
			<NoResultsTitle>No Results</NoResultsTitle>
			<NoResultsDescription>
				We're sorry, but we can't find any results for the selection you have made. Please refresh the page, try
				another selection, or check you have uploaded your activity to Strava.
			</NoResultsDescription>
		</NoResultsContainer>
	)
}
