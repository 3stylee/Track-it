import axios from "axios"
import { processAthleteActivities } from "../processAthleteActivities"
import { predictData } from "../predictData"

export const getNewActivities = async (data: object[], endpoint: string, accessToken: string, initialCopy: boolean) => {
	let continuePagination = true
	const maxAttempts = 20 // store no more than 4000 activites
	let counter = 0
	while (continuePagination && counter < maxAttempts) {
		// make mulitple requests at once to speed things up on initial copy
		// eslint-disable-next-line no-loop-func
		const promises = Array.from({ length: initialCopy ? 4 : 1 }, (_, i) =>
			axios.get(endpoint + `&page=${counter + i + 1}`, {
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			})
		)
		const responses = await Promise.all(promises)

		// feed the data to the model to get the run type predictions
		for (const response of responses) {
			const predictions = await predictData(response.data, accessToken)
			data.push(...processAthleteActivities(response.data, predictions))

			if (response.data.length < 200) continuePagination = false
		}

		counter += 4
	}
}
