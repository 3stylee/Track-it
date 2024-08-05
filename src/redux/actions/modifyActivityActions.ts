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

export const ModifyCurrentActivityType = (id: number, type: string) => {
	return {
		type: "MODIFY_CURRENT_ACTIVITY_TYPE",
		data: { id, type },
	}
}

export const triggerSessionGroupsUpdate = () => {
	return { type: "TRIGGER_SESSION_GROUPS_UPDATE" }
}

export const updateActivityType =
	(id: number, prevType: string, newType: string, currentActivity = false) =>
	async (dispatch: any) => {
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
						predictedType: newType,
					})
					dispatch(currentActivity ? ModifyCurrentActivityType(id, newType) : ModifyActivityType(id, newType))
					// If we've changed a session, need to trigger a new load of session groups
					if (prevType === "Session" || newType === "Session") {
						dispatch(triggerSessionGroupsUpdate())
					}
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
