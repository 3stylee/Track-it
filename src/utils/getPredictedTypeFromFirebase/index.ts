import { collection, getDocs, query, where } from "firebase/firestore"
import { FIREBASE_COLLECTIONS } from "../../constants/constants"
import { db } from "../../firebase"

export const getPredictedTypeFromFirebase = async (id: number) => {
	const q = query(collection(db, FIREBASE_COLLECTIONS.ACTIVITIES), where("id", "==", id))
	const querySnapshot = await getDocs(q)
	if (!querySnapshot.empty) {
		const doc = querySnapshot.docs[0]
		return doc.data().predictedType
	} else {
		console.error("No matching document found.")
		return null
	}
}
