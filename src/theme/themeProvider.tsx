import React, { useState } from "react"
import { THEMES } from "../constants"
import ThemeContext from "./themeContext"

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
	const [theme, setTheme] = useState(THEMES.DARK)

	const toggleTheme = () => {
		setTheme(theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT)
	}

	return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}
