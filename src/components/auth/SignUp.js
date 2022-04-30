// import React, { Component } from 'react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { signUp, signIn } from '../../api/auth'
import messages from '../shared/AutoDismissAlert/messages'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const fontStyle = {
    color: '#5c82a6',
	fontFamily: 'Quattrocento',
	fontSize: '.8em',
	fontWeight: 'bolder',
    padding: '2em'
}
const pageBackground = {
    backgroundColor: '#99a98f',
    backgroundImage: `url("https://res.cloudinary.com/dk0n7fyjj/image/upload/v1651343912/istockphoto-544125236-170667a_nqhtm0.jpg")`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    margin: '20px 20px 20px 20px',
    height: '50%',
    width: '93%',
    opacity: '0.8',
    position: 'absolute',
    zIndex: '-1'
}

const whiteBox = {
    backgroundColor: 'white',
    margin: '30px 30px 30px 30px',
    opacity: '0.7',
    height: '47%',
    width: '47%',
    position: 'absolute',
    zIndex: '-1',
}

const SignUp = (props) => {
  
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')

    const navigate = useNavigate()

	const onSignUp = (event) => {
		event.preventDefault()

		const { msgAlert, setUser } = props

        const credentials = {email, password, passwordConfirmation}

		signUp(credentials)
			.then(() => signIn(credentials))
			.then((res) => setUser(res.data.user))
			.then(() => navigate('/'))
			.catch((error) => {
                setEmail('')
                setPassword('')
                setPasswordConfirmation('')
				msgAlert({
					heading: 'Sign Up Failed with error: ' + error.message,
					message: messages.signUpFailure,
					variant: 'danger',
				})
			})
	}


    return (
        <div className='row'>
            <div className='col-sm-10 col-md-8 mx-auto mt-5' style={fontStyle}>
                <h3>Sign Up</h3>
                <Form onSubmit={onSignUp}>
                    <Form.Group controlId='email'>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            required
                            type='email'
                            name='email'
                            value={email}
                            placeholder='Enter email'
                            onChange={e => setEmail(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId='password'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            required
                            name='password'
                            value={password}
                            type='password'
                            placeholder='Password'
                            onChange={e => setPassword(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId='passwordConfirmation'>
                        <Form.Label>Password Confirmation</Form.Label>
                        <Form.Control
                            required
                            name='passwordConfirmation'
                            value={passwordConfirmation}
                            type='password'
                            placeholder='Confirm Password'
                            onChange={e => setPasswordConfirmation(e.target.value)}
                        />
                    </Form.Group>
                    <Button variant='primary' type='submit'>
                        Submit
                    </Button>
                </Form>
            </div>
            <div style={pageBackground}> </div>
                <div style={whiteBox}> </div>
        </div>
    )

}

export default SignUp