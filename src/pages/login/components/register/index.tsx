import React, { useState } from "react"
import { Button, Form } from "react-bootstrap"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { CentralCard, PageContainer } from "../components"
import { useNavigate } from "react-router-dom"
import { ROUTE_PATHS } from "../../../../constants/constants"

export const Register = () => {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [error, setError] = useState(null)
	const navigate = useNavigate()

	const handleRegister = async (event: any) => {
		event.preventDefault()
		const auth = getAuth()
		try {
			await createUserWithEmailAndPassword(auth, email, password)
			navigate(ROUTE_PATHS.HOME)
		} catch (error: any) {
			setError(error.message)
		}
	}

	return (
		<PageContainer>
			<CentralCard>
				<Form onSubmit={handleRegister}>
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
						Register
					</Button>
				</Form>
			</CentralCard>
		</PageContainer>
	)
}
