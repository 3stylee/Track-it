import React from "react"
import { Container, Chevron } from "./components"

export interface SortChevronsProps {
	number: number
	sortOption: number
}

export const SortChevrons = ({ number, sortOption }: SortChevronsProps) => {
	return (
		<Container>
			<Chevron icon="chevron-up" size={12} strokeWidth={4} active={number * 2 === sortOption} />
			<Chevron icon="chevron-down" size={12} strokeWidth={4} active={number * 2 + 1 === sortOption} />
		</Container>
	)
}
