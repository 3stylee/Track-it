import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import {
	AUTH_ERROR_BUTTON,
	AUTH_ERROR_MESSAGE,
	AUTH_ERROR_TITLE,
	NF_404_ERROR_BUTTON,
	NF_404_ERROR_MESSAGE,
	NF_404_ERROR_TITLE,
	O_AUTH_URL,
	ROUTE_PATHS,
} from "./constants"
import TitleBanner from "./globalComponents/titleBanner"
import LoginPage from "./pages/login/components/login"
import OAuthorisationCallback from "./pages/login/components/OAuthorisationCallback"
import Home from "./pages/home"
import ErrorPage from "./pages/errorPage"
import ActivitiesList from "./pages/home/subpages/activitiesList/components/activitiesList"
import Dashboard from "./pages/home/subpages/dashboard/components/dashboard"
import Activity from "./pages/home/subpages/activity/components/activity"
import { Calendar } from "./pages/home/subpages/calendar/components/calendar"
import { ThemeProvider } from "@emotion/react"
import useCustomTheme from "./theme/useCustomTheme"

const App = () => {
	const { theme, toggleTheme } = useCustomTheme()
	return (
		<ThemeProvider theme={theme}>
			<TitleBanner />
			<BrowserRouter>
				<Routes>
					<Route path={ROUTE_PATHS.DEFAULT} element={<LoginPage />} />
					<Route path={ROUTE_PATHS.AUTHORIZE} element={<OAuthorisationCallback />} />
					<Route
						path={ROUTE_PATHS.AUTH_ERROR}
						element={
							<ErrorPage
								title={AUTH_ERROR_TITLE}
								eMessage={AUTH_ERROR_MESSAGE}
								buttonText={AUTH_ERROR_BUTTON}
								buttonLink={O_AUTH_URL}
							/>
						}
					/>
					<Route path={ROUTE_PATHS.HOME} element={<Home toggleTheme={toggleTheme} />}>
						<Route path="" element={<ActivitiesList />} />
						<Route path={ROUTE_PATHS.DASHBOARD} element={<Dashboard />} />
						<Route path={ROUTE_PATHS.ACTIVITY} element={<Activity />} />
						<Route path={ROUTE_PATHS.CALENDAR} element={<Calendar />} />
					</Route>
					<Route
						path="*"
						element={
							<ErrorPage
								title={NF_404_ERROR_TITLE}
								eMessage={NF_404_ERROR_MESSAGE}
								buttonText={NF_404_ERROR_BUTTON}
								buttonLink={"/home"}
							/>
						}
					/>
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	)
}
export default App
