import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import "./customBootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle.min"
import { Provider } from "react-redux"
import { FirebaseAppProvider } from "reactfire"
import { configureStore } from "@reduxjs/toolkit"
import { rootReducer } from "./redux/reducers"
import thunk from "redux-thunk"
import "./globalStyles.css"

const firebaseConfig = {
	apiKey: "AIzaSyCYeLygmrF5s2zp2cO96EiOysEi2F9RthI",
	authDomain: "track-it-2c2dd.firebaseapp.com",
	projectId: "track-it-2c2dd",
	storageBucket: "track-it-2c2dd.appspot.com",
	messagingSenderId: "722291937623",
	appId: "1:722291937623:web:f687f1819f73fa503bae12",
	measurementId: "G-T7XXH7KEZJ",
}

const store = configureStore({
	reducer: rootReducer,
	middleware: [thunk],
})

const rootElem = document.getElementById("root")
if (rootElem !== null) {
	const root = ReactDOM.createRoot(rootElem)
	root.render(
		<Provider store={store}>
			<FirebaseAppProvider firebaseConfig={firebaseConfig}>
				<App />
			</FirebaseAppProvider>
		</Provider>
	)
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
