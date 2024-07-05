import styled from "@emotion/styled"

export const EventContainer = styled("div")`
	background-color: var(--bs-primary);
	padding: 0.5rem;
	width: 100%;
	border-radius: var(--bs-border-radius);
	color: white;
	margin-bottom: 0.25rem;
	font-size: 0.75rem;
`
export const AthleteIcon = styled("img")`
	width: 0.85rem;
	height: 0.85rem;
`
export const EventHeader = styled("div")`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 0.25rem;
	text-transform: lowercase;
`
export const Title = styled("div")`
	text-overflow: ellipsis;
	overflow: hidden;
`
