import { useEffect, useRef } from "react"

export const useInfiniteScroll = (scrollDown: () => void, before: number | undefined, after: number | undefined) => {
	const bottomRef = useRef(null)

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						if (entry.target === bottomRef.current) {
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

		if (bottomRef.current) {
			observer.observe(bottomRef.current)
		}

		return () => observer.disconnect()
	}, [scrollDown, before, after])

	return { bottomRef }
}
