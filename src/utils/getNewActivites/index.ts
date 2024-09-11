import axios from "axios"
import { processAthleteActivities } from "../processAthleteActivities"
import { predictData } from "../predictData"

export const getNewActivities = async (data: object[], endpoint: string, accessToken: string, initialCopy: boolean) => {
	let continuePagination = true
	const maxAttempts = 20 // store no more than 4000 activites
	let counter = 0
	let responses: any[] = []
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

		for (const promise of promises) {
			try {
				const response = await promise
				responses = responses.concat(response.data)
				if (response.data.length < 200) continuePagination = false
			} catch (error) {
				console.error("Promise rejected:", error)
			}
		}
		counter += 4
	}
	const predictions = await predictData(responses, accessToken)
	data.push(...processAthleteActivities(responses, predictions))
}
