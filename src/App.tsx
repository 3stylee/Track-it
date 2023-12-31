import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginPage from "./pages/login/components/login"
import OAuthorisationCallback from "./pages/login/components/OAuthorisationCallback"
import Home from "./pages/home"
import TitleBanner from "./globalComponents/titleBanner"
import ErrorPage from "./globalComponents/errorPage"
import { O_AUTH_URL, ROUTE_PATHS } from "./constants"
import ActivitiesList from "./pages/home/subpages/activitiesList/components/activitiesList"
import Dashboard from "./pages/home/subpages/dashboard/components/dashboard"

const App = () => (
	<>
		<TitleBanner />
		<BrowserRouter>
			<Routes>
				<Route path={ROUTE_PATHS.DEFAULT} element={<LoginPage />} />
				<Route path={ROUTE_PATHS.AUTHORIZE} element={<OAuthorisationCallback />} />
				<Route
					path={ROUTE_PATHS.AUTH_ERROR}
					element={
						<ErrorPage
							title="Authentication Error"
							eMessage="Sorry, but we were unable to authenticate your Strava account. Please try again"
							buttonText="Try again »"
							buttonLink={O_AUTH_URL}
						/>
					}
				/>
				<Route path={ROUTE_PATHS.HOME} element={<Home />}>
					<Route path="" element={<ActivitiesList />} />
					<Route path={ROUTE_PATHS.DASHBOARD} element={<Dashboard />} />
				</Route>
				<Route
					path="*"
					element={
						<ErrorPage
							title="404 Page Not Found"
							eMessage="Sorry, but the page you are looking for does not exist"
						/>
					}
				/>
			</Routes>
		</BrowserRouter>
	</>
)

export default App
