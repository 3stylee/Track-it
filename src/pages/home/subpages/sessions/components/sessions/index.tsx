import React, { useEffect } from "react"
import { PageContainer, PageTitle } from "./components"
import DataContainer from "../dataContainer"
import { Outlet, useParams } from "react-router-dom"
import connect from "./connect"

export interface SessionsProps {
	sessions: object[]
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
	return (
		<PageContainer>
			<PageTitle>Sessions</PageTitle>
			{id ? <Outlet /> : <DataContainer />}
		</PageContainer>
	)
}

export default connect(Sessions)
