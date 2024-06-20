import styled from "@emotion/styled"
import { Button } from "react-bootstrap"

export const Container = styled("div")`
	padding: 2rem;
	padding-top: 0;

	@media (max-width: 768px) {
		padding: 0rem 1rem;
	}
`
export const LoadMoreContainer = styled("div")`
	display: flex;
	justify-content: center;
	width: 100%;
`

export const LoadMoreButton = styled(Button)`
	width: 25%;

	@media (max-width: 1280px) {
		width: 50%;
	}

	@media (max-width: 576px) {
		width: 80%;
		margin-bottom: 1rem;
	}
`
