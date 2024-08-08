import { useState, useEffect } from "react"
import Cookies from "js-cookie"
import darkTheme from "./darkTheme"
import lightTheme from "./lightTheme"

const useTheme = () => {
	const [isDarkMode, setIsDarkMode] = useState(Cookies.get("darkMode") === "true")

	useEffect(() => {
		Cookies.set("darkMode", isDarkMode.toString())
		document.body.style.background = isDarkMode ? darkTheme.background : lightTheme.background
	}, [isDarkMode])

	const toggleTheme = () => {
		setIsDarkMode((prevMode) => !prevMode)
	}

	const theme = isDarkMode ? darkTheme : lightTheme

	return { theme, toggleTheme }
}

export default useTheme
