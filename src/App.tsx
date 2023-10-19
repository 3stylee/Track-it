import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginPage from "./pages/login"
import { OAuthorisationCallback } from "./pages/login/components/OAuthorisationCallback"
import { Home } from "./pages/home"

const App = () => (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<LoginPage />} />
			<Route path="/authorize" element={<OAuthorisationCallback />} />
			<Route path="/home" element={<Home />} />
		</Routes>
	</BrowserRouter>
)

export default App
