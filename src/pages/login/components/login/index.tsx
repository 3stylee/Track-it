import React, { useEffect, useState } from "react"
import { Button, Form } from "react-bootstrap"
import { CentralCard, CentralSmallText, CentralTextLink, PageContainer } from "../components"
import { useNavigate } from "react-router-dom"
import connect from "./connect"
import { AnimatedSpinner } from "../../../../globalComponents/animatedSpinner"
import { validateLoginForm } from "../../../home/utils/validateLoginForm"
import { INVALID_EMAIL, PASSWORD_BLANK, ROUTE_PATHS, SIGN_UP_MESSAGE } from "../../../../constants/constants"
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { GoogleSignInButton } from "../googleSignInButton"

interface LoginProps {
	authState: string
	apiCallsInProgress: number
	apiError: string
	authUser: (email: string, password: string, navigate: (path: string) => void) => void
	authGoogleUser: (navigate: (path: string) => void) => void
}

const Login = ({ apiCallsInProgress, apiError, authUser, authGoogleUser }: LoginProps) => {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [validated, setValidated] = useState(false)
	const [checkedAuth, setCheckedAuth] = useState(false)
	const navigate = useNavigate()

	// Take user straight to home if they are logged in
	useEffect(() => {
		const auth = getAuth()
		onAuthStateChanged(auth, (user) => {
			if (user) {
				navigate(ROUTE_PATHS.HOME)
			}
			setCheckedAuth(true)
		})
	}, [navigate])

	const handleLogin = async (event: any) => {
		event.preventDefault()
		authUser(email, password, navigate)
	}

	const handleGoogleLogin = async () => {
		authGoogleUser(navigate)
	}
	if (!checkedAuth) return <AnimatedSpinner />
	return (
		<PageContainer>
			<CentralCard>
				<Form
					noValidate
					validated={validated}
					onSubmit={(event: any) => validateLoginForm(event, handleLogin, setValidated)}>
					<Form.Group controlId="formBasicEmail">
						<Form.Label>Email Address</Form.Label>
						<Form.Control
							required
							type="email"
							placeholder="Enter email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<Form.Control.Feedback type="invalid">{INVALID_EMAIL}</Form.Control.Feedback>
					</Form.Group>
					<Form.Group controlId="formBasicPassword" className="mt-2">
						<Form.Label>Password</Form.Label>
						<Form.Control
							required
							type="password"
							placeholder="Password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						<Form.Control.Feedback type="invalid">{PASSWORD_BLANK}</Form.Control.Feedback>
					</Form.Group>
					{apiError && <p className="text-danger my-3">{apiError}</p>}
					<hr />
					{apiCallsInProgress > 0 ? (
						<AnimatedSpinner height="7rem" noMargin />
					) : (
						<Button variant="primary w-100" type="submit">
							Login
						</Button>
					)}
				</Form>
				<CentralSmallText>OR</CentralSmallText>
				<GoogleSignInButton onClick={handleGoogleLogin} />
				<hr />
				<CentralTextLink
					onClick={() => {
						navigate(ROUTE_PATHS.REGISTER)
					}}>
					{SIGN_UP_MESSAGE}
				</CentralTextLink>
			</CentralCard>
		</PageContainer>
	)
}

export default connect(Login)
