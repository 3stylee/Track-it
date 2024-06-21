import { doc, getFirestore, setDoc, writeBatch } from "firebase/firestore"
import { FIREBASE_COLLECTIONS, NO_LOGGED_IN_USER } from "../../constants/constants"
import { updateFirestoreSessions } from "../../redux/actions/loadSessionsActions"

export const updateFirestoreSessionGroups = async (sessionGroups: number[][], dispatch: any) => {
	try {
		const uId = localStorage.getItem("uId")
		if (uId) {
			const db = getFirestore()
			const batch = writeBatch(db)

			for (const group of sessionGroups) {
				const docRef = doc(db, FIREBASE_COLLECTIONS.SESSION_GROUPS, group[0].toString())
				batch.set(docRef, {
					athleteId: uId,
					sessions: group,
				})
			}
			await batch.commit()

			// Update sessionsLastCopy in the user's document
			const sessionsLastCopy = new Date().toISOString()
			const userDocRef = doc(db, FIREBASE_COLLECTIONS.USERS, uId)
			await setDoc(userDocRef, { sessionsLastCopy }, { merge: true })
			dispatch(updateFirestoreSessions())
		} else {
			console.error(NO_LOGGED_IN_USER)
		}
	} catch (error) {
		console.error(error)
	}
}
