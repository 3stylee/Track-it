import React from "react"
import { useParams } from "react-router-dom"
import connect from "./connect"

export interface SessionGroupProps {
	sessionGroups: any[]
}

const SessionGroup = ({ sessionGroups }: SessionGroupProps) => {
	const { id } = useParams<{ id: string }>()
	const sessionGroup = sessionGroups.find(([firstGroupElement]) => firstGroupElement.toString() === id)
	return (
		<div>
			{sessionGroup ? (
				sessionGroup.map((session: any, index: any) => <div key={index}>{<h2>{session}</h2>}</div>)
			) : (
				<div>No group found</div>
			)}
		</div>
	)
}

export default connect(SessionGroup)
