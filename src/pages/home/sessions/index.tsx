import React, { useEffect } from "react"
import { PageContainer } from "./components"
import GroupsTable from "./groupsTable"
import { Outlet, useParams } from "react-router-dom"
import connect from "./connect"
import { AthleteActivities } from "../../../models/activities"

export interface SessionsProps {
	sessions: AthleteActivities
	sessionGroups: number[][]
	loadSessions: () => void
	loadSessionGroups: () => void
}

const Sessions = ({ sessions, sessionGroups, loadSessions, loadSessionGroups }: SessionsProps) => {
	useEffect(() => {
		if (sessions.length === 0) loadSessions()
	}, [sessions, loadSessions])

	useEffect(() => {
		if (sessions.length > 0 && sessionGroups.length === 0) loadSessionGroups()
	}, [sessions.length])

	const { id } = useParams<{ id: string }>()
	return <PageContainer>{id ? <Outlet /> : <GroupsTable />}</PageContainer>
}

export default connect(Sessions)
