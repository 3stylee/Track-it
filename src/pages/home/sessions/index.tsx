import React, { useEffect } from "react"
import { PageContainer } from "./components"
import GroupsTable from "./groupsTable"
import { Outlet, useParams } from "react-router-dom"
import connect from "./connect"

export interface SessionsProps {
	sessionsLength: number
	loadSessions: () => void
}

const Sessions = ({ sessionsLength, loadSessions }: SessionsProps) => {
	useEffect(() => {
		if (sessionsLength === 0) loadSessions()
	}, [sessionsLength, loadSessions])

	const { id } = useParams<{ id: string }>()
	return <PageContainer>{id ? <Outlet /> : <GroupsTable />}</PageContainer>
}

export default connect(Sessions)
