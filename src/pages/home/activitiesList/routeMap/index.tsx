import React, { useRef, useState } from "react"
import {
	ActivityDescription,
	ActivityTitle,
	CardContainer,
	DateText,
	ImageMap,
	ImagePlaceholder,
	MoreButton,
	StyledImage,
	StyledLink,
} from "./components"
import { getMapboxEndpoint } from "../../../../utils/getMapboxEndpoint"
import { ACTIVITY_TYPES, ROUTE_PATHS, THEMES } from "../../../../constants/constants"
import { LabelledStats } from "../../../../globalComponents/labelledStats"
import { useTheme } from "@emotion/react"
import { getActivityStats } from "../../../../utils/getActivityStats"
import connect from "./connect"
import { Units } from "../../../../models/state"
import { convertISOToDDMMYY } from "../../../../utils/convertISOtoDDMMYY"
import { BadgeDropdown } from "../../../../globalComponents/badgeDropdown"
import { MoreVertical } from "react-feather"
import { MoreMenu } from "../moreMenu"
import DeleteModal from "../deleteModal"
import { EditModal } from "../editModal"

export interface RouteMapProps {
	polyline: number[][]
	name: string
	time: number
	distance: number
	id: number
	speed: number
	units: Units
	predictedType: string
	start: string
	updateTypeError: boolean
	noBadges?: boolean
	updateActivityType: (id: number, prevType: string, newType: string) => void
}

const RouteMap = ({
	polyline,
	speed,
	name,
	time,
	distance,
	id,
	units,
	predictedType,
	start,
	updateTypeError,
	noBadges,
	updateActivityType,
}: RouteMapProps) => {
	const theme = useTheme()
	const buttonRef = useRef<HTMLDivElement>(null)
	const [imageLoaded, setImagedLoaded] = useState(false)
	const [showMoreMenu, setshowMoreMenu] = useState(false)
	const [showDelete, setShowDelete] = React.useState(false)
	const [showEdit, setShowEdit] = React.useState(false)

	const handleSetType = (selected: string) => {
		updateActivityType(id, predictedType, selected)
	}

	const handleShowMore = (e: React.MouseEvent) => {
		e.preventDefault()
		setshowMoreMenu(!showMoreMenu)
	}

	let url =
		theme.name === THEMES.DARK
			? require("../../../../assets/images/no_gps_dark.png")
			: require("../../../../assets/images/no_gps_light.png")
	if (polyline.length > 0) {
		url = getMapboxEndpoint(polyline, theme.name)
	}
	const stats = getActivityStats(distance, speed, time, units)
	return (
		<>
			<StyledLink to={ROUTE_PATHS.ACTIVITY + `?id=${id}`}>
				<CardContainer id="map">
					<ImageMap>
						<StyledImage
							src={url}
							alt="route map"
							className={`card-img-left ${!imageLoaded ? "d-none" : ""}`}
							onLoad={() => {
								setImagedLoaded(true)
							}}
						/>
						<BadgeDropdown
							showBadge={!noBadges && imageLoaded}
							selected={predictedType}
							setSelected={handleSetType}
							options={ACTIVITY_TYPES}
							error={updateTypeError}
						/>
						<DateText>{convertISOToDDMMYY(start)}</DateText>
					</ImageMap>
					{!imageLoaded && <ImagePlaceholder />}
					<ActivityDescription>
						<ActivityTitle className="card-title">{name}</ActivityTitle>
						<MoreButton onClick={handleShowMore} ref={buttonRef}>
							<MoreVertical size={18} />
						</MoreButton>
						{showMoreMenu && (
							<MoreMenu
								buttonRef={buttonRef}
								setShowMenu={setshowMoreMenu}
								setShowDelete={setShowDelete}
								setShowEdit={setShowEdit}
								id={id}
							/>
						)}
						<LabelledStats stats={stats} small={true} />
					</ActivityDescription>
				</CardContainer>
			</StyledLink>
			<DeleteModal id={id} show={showDelete} setShowDelete={setShowDelete} />
			<EditModal id={id} show={showEdit} setShowEdit={setShowEdit} />
		</>
	)
}

export default connect(RouteMap)
