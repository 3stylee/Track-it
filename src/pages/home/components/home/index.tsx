import React, { useEffect } from "react"
import { ColouredContainer, PageContainer } from "./components"
import HeaderContainer from "../headerContainer"
import DataContainer from "../dataContainer"
import { useNavigate } from "react-router-dom"
import { AUTH_STATES, ROUTE_PATHS } from "../../../../constants"
import Sidebar from "../../../../globalComponents/sidebar"
import connect from "./connect"

export const Home = ({ authState }: { authState: string }) => {
	const navigate = useNavigate()

	useEffect(() => {
		if (!(localStorage.getItem("access_code") || authState === AUTH_STATES.AUTHORISED)) {
			navigate(ROUTE_PATHS.DEFAULT)
		}
	}, [])

	return (
		<PageContainer>
			<Sidebar />
			<ColouredContainer>
				<HeaderContainer />
				<DataContainer />
			</ColouredContainer>
		</PageContainer>
	)
}

export default connect(Home)
