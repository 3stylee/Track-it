import React from "react"
import { THEMES } from "../constants"
const ThemeContext = React.createContext<{ theme: string; toggleTheme: any }>({
	theme: THEMES.DARK,
	toggleTheme() {
		throw new Error("Context not initialized")
	},
})
export default ThemeContext
