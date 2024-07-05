import React, { useEffect } from "react"
import { PageContainer } from "./components"
import GroupsTable from "./groupsTable"
import { Outlet, useParams } from "react-router-dom"
import connect from "./connect"

export interface SessionsProps {
	sessionsLength: number
	sessionGroupsLength: number
	loadSessions: () => void
	loadSessionGroups: () => void
}

const Sessions = ({ sessionsLength, sessionGroupsLength, loadSessions, loadSessionGroups }: SessionsProps) => {
	useEffect(() => {
		if (sessionsLength === 0) loadSessions()
	}, [sessionsLength, loadSessions])

	useEffect(() => {
		if (sessionsLength > 0 && sessionGroupsLength === 0) loadSessionGroups()
	}, [sessionsLength])

	const { id } = useParams<{ id: string }>()
	return <PageContainer>{id ? <Outlet /> : <GroupsTable />}</PageContainer>
}

export default connect(Sessions)
