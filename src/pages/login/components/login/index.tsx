import React, { useState } from "react"
import { Button, Form } from "react-bootstrap"
import { GoogleAuthProvider, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth"
import { CentralCard, PageContainer } from "../components"
import { useNavigate } from "react-router-dom"
import { ROUTE_PATHS } from "../../../../constants/constants"

export const Login = () => {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [error, setError] = useState(null)
	const navigate = useNavigate()

	const handleLogin = async (event: any) => {
		event.preventDefault()
		const auth = getAuth()
		try {
			await signInWithEmailAndPassword(auth, email, password)
			navigate(ROUTE_PATHS.HOME)
		} catch (error: any) {
			setError(error.message)
		}
	}

	const handleGoogleLogin = async () => {
		const auth = getAuth()
		const provider = new GoogleAuthProvider()
		try {
			await signInWithPopup(auth, provider)
			navigate(ROUTE_PATHS.HOME)
		} catch (error: any) {
			setError(error.message)
		}
	}

	return (
		<PageContainer>
			<CentralCard>
				<Form onSubmit={handleLogin}>
					<Form.Group controlId="formBasicEmail">
						<Form.Label>Email address</Form.Label>
						<Form.Control
							type="email"
							placeholder="Enter email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</Form.Group>

					<Form.Group controlId="formBasicPassword">
						<Form.Label>Password</Form.Label>
						<Form.Control
							type="password"
							placeholder="Password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</Form.Group>

					{error && <p>{error}</p>}

					<Button variant="primary mt-3" type="submit">
						Login
					</Button>
				</Form>
				<hr />
				<Button variant="secondary" onClick={handleGoogleLogin}>
					Login with Google
				</Button>
			</CentralCard>
		</PageContainer>
	)
}
