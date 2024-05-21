/**
 * Validates the login form.
 *
 * This function checks if the form is valid. If the form is not valid, it prevents the form from being submitted and stops the propagation of the event.
 *
 * @param {any} event - The event object from the form submission.
 * @param {(event: any) => void} handleLogin - The function to call if the form is valid.
 * @param {(validated: boolean) => void} setValidated - The function to call to set the `validated` state.
 */
export const validateLoginForm = (
	event: any,
	handleLogin: (event: any) => void,
	setValidated: (validated: boolean) => void
) => {
	const form = event.currentTarget
	if (form.checkValidity() === false) {
		event.preventDefault()
		event.stopPropagation()
		setValidated(true)
	} else {
		handleLogin(event)
	}
}
