import styled from "@emotion/styled"
import { motion } from "framer-motion"

export const Switch = styled("div")<{ isOn: boolean }>`
	width: 5rem;
	height: 2.25rem;
	background-color: var(--bs-primary);
	display: flex;
	justify-content: ${({ isOn }) => (isOn ? "flex-end" : "flex-start")};
	border-radius: 50px;
	padding: 0.25rem;
	cursor: pointer;
`
export const Handle = styled(motion.div)`
	width: 2.5rem;
	height: 1.75rem;
	background-color: white;
	border-radius: 2.5rem;
	display: flex;
	align-items: center;
	justify-content: center;
`
export const TextContainer = styled("div")`
	font-size: 0.875rem;
	font-weight: bold;
	color: black;
`
export const OffStateTextContainer = styled("div")<{ hidden: boolean }>`
	font-size: 0.875rem;
	font-weight: bold;
	padding: 0.375rem;
	color: white;
	display: ${({ hidden }) => (hidden ? "none" : "flex")};
	align-items: center;
`
