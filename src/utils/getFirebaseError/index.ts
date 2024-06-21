export const getFirebaseError = (errorCode: string): string => {
	console.log("errorCode: ", errorCode)
	switch (errorCode) {
		case "auth/invalid-email":
			return "Invalid email address."
		case "auth/user-disabled":
			return "User account has been disabled."
		case "auth/user-not-found":
			return "User not found."
		case "auth/invalid-login-credentials":
			return "Incorrect email or password."
		case "auth/email-already-in-use":
			return "Email already in use."
		case "auth/network-request-failed":
			return "Network request failed. Please try again later."
		default:
			return "An error occurred. Please try again later."
	}
}
