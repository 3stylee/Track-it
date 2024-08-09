import { Theme } from "@emotion/react"
import { ACTIVITY_IMAGE_RESOLUTIONS, BREAKPOINTS, THEMES } from "../../constants/constants"
import decodePolyLine from "../decodePolyline"
import { getMapboxEndpoint } from "../getMapboxEndpoint"

export const loadActivityImage = (
	polyline: string,
	setBackgroundImage: (image: string | null) => void,
	theme: Theme
) => {
	const placeholder =
		theme.name === THEMES.DARK
			? require("../../assets/images/tile_background_dark.png")
			: require("../../assets/images/tile_background_light.png")
	setBackgroundImage(placeholder)
	if (polyline === undefined || polyline === "") {
		setBackgroundImage(null)
		return
	}

	const decodedPolyline = decodePolyLine(polyline)
	const url = getMapboxEndpoint(decodedPolyline, theme.name, getResolution())

	const img = new Image()
	img.src = url
	img.onload = () => setBackgroundImage(url)
	img.onerror = () => setBackgroundImage(null)
}

const getResolution = () => {
	if (window.matchMedia(`(max-width: ${BREAKPOINTS.UP.XS}`).matches) {
		return ACTIVITY_IMAGE_RESOLUTIONS.XS
	} else if (window.matchMedia(`(max-width: ${BREAKPOINTS.UP.SM}`).matches) {
		return ACTIVITY_IMAGE_RESOLUTIONS.SM
	} else if (window.matchMedia(`(max-width: ${BREAKPOINTS.UP.MD}`).matches) {
		return ACTIVITY_IMAGE_RESOLUTIONS.MD
	} else if (window.matchMedia(`(max-width: ${BREAKPOINTS.UP.LG}`).matches) {
		return ACTIVITY_IMAGE_RESOLUTIONS.LG
	} else if (window.matchMedia(`(max-width: ${BREAKPOINTS.UP.XL}`).matches) {
		return ACTIVITY_IMAGE_RESOLUTIONS.XL
	} else return ACTIVITY_IMAGE_RESOLUTIONS.XXL
}
