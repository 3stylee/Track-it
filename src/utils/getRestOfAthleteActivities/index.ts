import { collection, getDocs, limit, orderBy, query, where } from "firebase/firestore"
import { db } from "../../firebase"
import { FIREBASE_COLLECTIONS, PAGE_SIZE } from "../../constants/constants"

export const getRestOfAthleteActivities = async (dateOfLastBackup: string, length: number) => {
	const q = query(
		collection(db, FIREBASE_COLLECTIONS.ACTIVITIES),
		where("userId", "==", localStorage.getItem("uId")),
		where("start", "<=", dateOfLastBackup),
		orderBy("start", "desc"),
		limit(PAGE_SIZE - length)
	)
	const activities = (await getDocs(q)).docs.map((doc) => doc.data())
	return activities
}
