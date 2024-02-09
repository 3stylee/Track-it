import React from "react"
import { Container } from "./components"
import { useTheme } from "@emotion/react"

export interface ErrorPageProps {
	title: string
	eMessage: string
	buttonText?: string
	buttonLink?: string
}

export const ErrorPage = ({ title, eMessage, buttonText, buttonLink }: ErrorPageProps) => {
	const theme = useTheme()
	return (
		<Container className={`rounded text-${theme.bootstrap.textColor} bg-${theme.background}}`}>
			<h1>{title}</h1>
			<p className="lead">{eMessage}</p>
			{buttonText ? (
				<a className="btn btn-lg btn-primary" href={buttonLink} role="button">
					{buttonText}
				</a>
			) : null}
		</Container>
	)
}

export default ErrorPage
