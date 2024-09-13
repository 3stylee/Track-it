import React from "react"
import { FieldPlaceholder, TextPlaceholder } from "../../../../../globalComponents/placeholderUI/components"
import { MAX_RECENT_ACTIVITIES } from "../../../../../constants/constants"

export const PlaceholderTable = () => {
	return (
		<div className="mt-3">
			<div className="d-flex justify-content-between mb-2">
				<TextPlaceholder width="4rem" fontSize="0.875rem" />
				<TextPlaceholder width="5rem" fontSize="0.875rem" />
				<TextPlaceholder width="6rem" fontSize="0.875rem" />
			</div>
			{Array.from({ length: MAX_RECENT_ACTIVITIES / 2 }).map((_, i) => (
				<FieldPlaceholder key={i} height="2rem" className="mb-4" noBorder />
			))}
		</div>
	)
}
