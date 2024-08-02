import { collection, getDocs, query, updateDoc, where } from "firebase/firestore"
import { db } from "../../firebase"
import { FIREBASE_COLLECTIONS } from "../../constants/constants"
import { apiCallError } from "./apiStatusActions"

export const ModifyActivityType = (id: number, type: string) => {
	return {
		type: "MODIFY_ACTIVITY_TYPE",
		data: { id, type },
	}
}

export const updateActivityType = (id: number, type: string) => async (dispatch: any) => {
	try {
		const uId = localStorage.getItem("uId")
		if (uId) {
			const q = query(
				collection(db, FIREBASE_COLLECTIONS.ACTIVITIES),
				where("userId", "==", uId),
				where("id", "==", id)
			)

			const querySnapshot = await getDocs(q)
			if (!querySnapshot.empty) {
				const docRef = querySnapshot.docs[0].ref
				await updateDoc(docRef, {
					predictedType: type,
				})
				dispatch(ModifyActivityType(id, type))
			} else {
				console.error("No matching document found.")
			}
		} else {
			dispatch(apiCallError("Error updating type"))
		}
	} catch (error: any) {
		dispatch(apiCallError(error.message))
	}
}
