import React from "react"
import { FieldPlaceholder } from "../../../../../globalComponents/placeholderUI/components"

export const PlaceholderTable = () => {
	return (
		<div>
			{Array.from({ length: 8 }).map((_, i) => (
				<FieldPlaceholder key={i} height="2.25rem" noBorder noMargin className="mb-1" />
			))}
		</div>
	)
}
