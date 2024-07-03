import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
	apiKey: "AIzaSyCYeLygmrF5s2zp2cO96EiOysEi2F9RthI",
	authDomain: "track-it-2c2dd.firebaseapp.com",
	projectId: "track-it-2c2dd",
	storageBucket: "track-it-2c2dd.appspot.com",
	messagingSenderId: "722291937623",
	appId: "1:722291937623:web:f687f1819f73fa503bae12",
	measurementId: "G-T7XXH7KEZJ",
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
