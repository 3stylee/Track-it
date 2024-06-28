import { useEffect, useRef } from "react"

export const useInfiniteScroll = (
	scrollUp: () => void,
	scrollDown: () => void,
	before: number | undefined,
	after: number | undefined
) => {
	const topRef = useRef(null)
	const bottomRef = useRef(null)

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						if (entry.target === topRef.current) {
							scrollUp()
						} else if (entry.target === bottomRef.current) {
							scrollDown()
						}
					}
				})
			},
			{
				root: null,
				rootMargin: "0px",
				threshold: 0.1,
			}
		)

		if (topRef.current) {
			observer.observe(topRef.current)
		}
		if (bottomRef.current) {
			observer.observe(bottomRef.current)
		}

		return () => observer.disconnect()
	}, [scrollUp, scrollDown, before, after])

	return { topRef, bottomRef }
}
