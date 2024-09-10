import { API_BASE_URL } from "../../constants/constants"

export const getEditableDetails = async (
	id: number,
	access_token: string,
	setInitialDetails: any,
	setDetails: any,
	setLoading: any,
	setError: any
) => {
	const activityEndpoint = `${API_BASE_URL}/activities/${id}`
	try {
		const response = await fetch(activityEndpoint, {
			headers: {
				Authorization: `Bearer ${access_token}`,
			},
		})
		const data = await response.json()
		const details = { name: data.name, description: data.description, muted: data.hide_from_home }
		setInitialDetails(details)
		setDetails(details)
	} catch (error: any) {
		console.error(error.message)
		setError(error.message)
	}
	setLoading(false)
}
