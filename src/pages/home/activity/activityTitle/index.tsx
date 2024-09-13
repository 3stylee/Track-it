import React, { useEffect, useRef, useState } from "react"
import { Card, Row } from "react-bootstrap"
import connect from "./connect"
import { CenteredCol, StatsContainer, StyledCard, Title, Date, MoreButton } from "./components"
import { getActivityTitleStats } from "../../../../utils/getActivityTitleStats"
import { LabelledStat } from "../labelledStat"
import { CurrentActivity } from "../../../../models/activities"
import { Units } from "../../../../models/state"
import { BadgeDropdown } from "../../../../globalComponents/badgeDropdown"
import { ACTIVITY_TYPES } from "../../../../constants/constants"
import { formatDate } from "date-fns"
import { MoreVertical } from "react-feather"
import { MoreMenu } from "../../../../globalComponents/moreMenu"
import DeleteModal from "../../../../globalComponents/moreMenu/deleteModal"
import EditModal from "../../../../globalComponents/moreMenu/editModal"
import { TextPlaceholder } from "../../../../globalComponents/placeholderUI/components"

interface ActivityTitleProps {
	currentActivity: CurrentActivity
	units: Units
	loading: boolean
	updateActivityType: (id: number, prevType: string, newType: string, currentActivity?: boolean) => void
}

export const ActivityTitle = ({ currentActivity, units, loading, updateActivityType }: ActivityTitleProps) => {
	const buttonRef = useRef<HTMLDivElement>(null)
	const [showMoreMenu, setshowMoreMenu] = useState(false)
	const [showDelete, setShowDelete] = useState(false)
	const [showEdit, setShowEdit] = useState(false)
	const [stats, setStats] = useState<{ text: string; value: string; unit: string }[]>()

	const handleShowMore = (e: React.MouseEvent) => {
		e.preventDefault()
		if (!loading) setshowMoreMenu(!showMoreMenu)
	}

	const { id, name, description, date } = currentActivity
	useEffect(() => {
		if (currentActivity.distance) {
			setStats(getActivityTitleStats(currentActivity, units))
		}
	}, [currentActivity.distance])

	const handleSetType = (selected: string) => {
		updateActivityType(currentActivity.id, currentActivity.predictedType, selected, true)
	}

	return (
		<>
			<StyledCard>
				<Card.Body>
					<Title>
						{loading || !date ? (
							<>
								<TextPlaceholder fontSize="0.875rem" width="5rem" />
								<TextPlaceholder fontSize="2.5rem" width="50%" />
								<TextPlaceholder fontSize="1rem" width="60%" />
							</>
						) : (
							<>
								<Date>{formatDate(date, "dd/MM/yy")}</Date>
								<h2>{name}</h2>
								{description && <i>{`"${description}"`}</i>}
							</>
						)}
					</Title>
					<StatsContainer>
						<Row className="g-3">
							{loading
								? Array.from({ length: 6 }).map((_, i) => (
										<CenteredCol key={i} xs={6} sm={6} md={4} lg={6} xl={4}>
											<TextPlaceholder fontSize="0.875rem" width="5rem" />
											<TextPlaceholder fontSize="1.75rem" width="7rem" />
										</CenteredCol>
								  ))
								: stats?.map(({ text, value, unit }) => (
										<CenteredCol key={text} xs={6} sm={6} md={4} lg={6} xl={4}>
											<LabelledStat text={text} value={value} unit={unit} />
										</CenteredCol>
								  ))}
						</Row>
					</StatsContainer>
				</Card.Body>
				{!loading && (
					<>
						<BadgeDropdown
							selected={currentActivity.predictedType}
							options={ACTIVITY_TYPES}
							setSelected={handleSetType}
							showBadge={!loading}
						/>
						<MoreButton onClick={handleShowMore} ref={buttonRef}>
							<MoreVertical size={24} />
						</MoreButton>
					</>
				)}
				{showMoreMenu && (
					<MoreMenu
						buttonRef={buttonRef}
						setShowMenu={setshowMoreMenu}
						setShowDelete={setShowDelete}
						setShowEdit={setShowEdit}
						id={id}
						top={3.25}
						left={0.75}
					/>
				)}
			</StyledCard>
			<DeleteModal id={id} show={showDelete} setShowDelete={setShowDelete} current />
			<EditModal id={id} show={showEdit} setShowEdit={setShowEdit} current />
		</>
	)
}

export default connect(ActivityTitle)
