import React from "react"
import { Container, UpChevron, DownChevron } from "./components"

export interface SortChevronsProps {
	number: number
	sortOption: number
}

export const SortChevrons = ({ number, sortOption }: SortChevronsProps) => {
	return (
		<Container>
			<UpChevron size={12} strokeWidth={4} active={number * 2 === sortOption} />
			<DownChevron size={12} strokeWidth={4} active={number * 2 + 1 === sortOption} />
		</Container>
	)
}
