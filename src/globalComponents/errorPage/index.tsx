import React from "react"

export interface ErrorPageProps {
	title: string
	eMessage: string
	buttonText?: string
	buttonLink?: string
}

export const ErrorPage = ({ title, eMessage, buttonText, buttonLink }: ErrorPageProps) => {
	return (
		<div className="bg-body-tertiary p-5 m-5 rounded">
			<h1>{title}</h1>
			<p className="lead">{eMessage}</p>
			{buttonText ? (
				<a className="btn btn-lg btn-primary" href={buttonLink} role="button">
					{buttonText}
				</a>
			) : null}
		</div>
	)
}

export default ErrorPage
