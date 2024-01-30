import React, { useContext } from "react"
import { Container } from "./components"
import ThemeContext from "../../theme/themeContext"
import { THEMES } from "../../constants"

export interface ErrorPageProps {
	title: string
	eMessage: string
	buttonText?: string
	buttonLink?: string
}

export const ErrorPage = ({ title, eMessage, buttonText, buttonLink }: ErrorPageProps) => {
	const { theme } = useContext(ThemeContext)
	return (
		<Container className={`rounded ${theme === THEMES.DARK && "text-white bg-dark"}`}>
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
