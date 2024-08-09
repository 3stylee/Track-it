import React from "react"
import { ErrorContainer } from "./components"
import connect from "./connect"
import { Button } from "react-bootstrap"

interface LoadMoreErrorProps {
	apiError: string
	tryAgain: () => void
}

const LoadMoreError = ({ apiError, tryAgain }: LoadMoreErrorProps) => {
	return (
		<ErrorContainer>
			{apiError}
			<Button onClick={tryAgain}>Try Again</Button>
		</ErrorContainer>
	)
}

export default connect(LoadMoreError)
