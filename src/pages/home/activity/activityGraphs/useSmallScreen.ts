import React from "react"

const useSmallScreen = () => {
	const [isScreenSmall, setIsScreenSmall] = React.useState(window.innerWidth < 769)

	React.useEffect(() => {
		const handleResize = () => {
			setIsScreenSmall(window.innerWidth < 768)
		}

		window.addEventListener("resize", handleResize)

		// Cleanup the event listener on component unmount
		return () => window.removeEventListener("resize", handleResize)
	}, [])

	return isScreenSmall
}

export default useSmallScreen
