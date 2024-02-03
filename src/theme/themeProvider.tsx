import React, { useState } from "react"
import { THEMES } from "../constants"
import ThemeContext from "./themeContext"
import Cookies from "js-cookie"

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
	const [theme, setTheme] = useState(Cookies.get("theme") || THEMES.DARK)

	const toggleTheme = () => {
		const newTheme = theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT
		setTheme(newTheme)
		Cookies.set("theme", newTheme)
	}

	return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}
