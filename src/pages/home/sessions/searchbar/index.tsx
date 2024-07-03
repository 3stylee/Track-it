import React from "react"
import { IconContainer, SearchbarContainer } from "./components"
import { useTheme } from "@emotion/react"
import { Search } from "react-feather"

export interface searchbarProps {
	searchText: string
	setSearchText: (text: string) => void
}

export const Searchbar = ({ searchText, setSearchText }: searchbarProps) => {
	const theme = useTheme()
	return (
		<SearchbarContainer data-bs-theme={theme.name}>
			<input
				type="text"
				className={"form-control "}
				placeholder="Search"
				aria-label="Search"
				onChange={({ target }) => setSearchText(target.value)}
				value={searchText}
			/>
			<div className="input-group-prepend">
				<IconContainer className="input-group-text">
					<Search size={20} />
				</IconContainer>
			</div>
		</SearchbarContainer>
	)
}
