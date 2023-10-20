import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginPage from "./pages/login/components/login"
import OAuthorisationCallback from "./pages/login/components/OAuthorisationCallback/connect"
import Home from "./pages/home/components/home/connect"
import { TitleBanner } from "./globalComponents/titleBanner"
import { AuthError } from "./pages/login/components/authError"

const App = () => (
	<>
		<TitleBanner />
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<LoginPage />} />
				<Route path="/authorize" element={<OAuthorisationCallback />} />
				<Route path="/auth_error" element={<AuthError />} />
				<Route path="/home" element={<Home />} />
			</Routes>
		</BrowserRouter>
	</>
)

export default App
