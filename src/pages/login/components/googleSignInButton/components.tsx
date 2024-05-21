import styled from "@emotion/styled"

export const GoogleButton = styled("button")`
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	-webkit-appearance: none;
	background-color: #131314;
	background-image: none;
	border: 1px solid #747775;
	-webkit-border-radius: 4px;
	border-radius: 4px;
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
	color: #1f1f1f;
	cursor: pointer;
	font-size: 14px;
	height: 38px;
	letter-spacing: 0.25px;
	outline: none;
	overflow: hidden;
	padding: 0 12px;
	position: relative;
	text-align: center;
	-webkit-transition: background-color 0.218s, border-color 0.218s, box-shadow 0.218s;
	transition: background-color 0.218s, border-color 0.218s, box-shadow 0.218s;
	vertical-align: middle;
	white-space: nowrap;
	width: auto;
	min-width: min-content;
`
export const ButtonIcon = styled("div")`
	height: 23px;
	margin-right: 12px;
	min-width: 20px;
	width: 20px;
`
export const ContentWrapper = styled("div")`
	-webkit-align-items: center;
	align-items: center;
	display: flex;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-flex-wrap: nowrap;
	flex-wrap: nowrap;
	height: 100%;
	justify-content: center;
	position: relative;
	width: 100%;
`
export const ButtonContents = styled("span")`
	-webkit-flex-grow: 0;
	flex-grow: 0;
	font-weight: bold;
	overflow: hidden;
	text-overflow: ellipsis;
	vertical-align: top;
	color: white;
`
export const ButtonState = styled("div")`
	-webkit-transition: opacity 0.218s;
	transition: opacity 0.218s;
	bottom: 0;
	left: 0;
	opacity: 0;
	position: absolute;
	right: 0;
	top: 0;
`
