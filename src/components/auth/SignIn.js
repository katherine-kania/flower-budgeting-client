import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { signIn } from '../../api/auth'
import messages from '../shared/AutoDismissAlert/messages'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const fontStyle = {
    color: 'white',
	fontFamily: 'Poiret One',
	fontSize: '1em',
	fontWeight: 'bolder',
    padding: '3em',
}
const pageBackground = {
    backgroundImage: `url("https://res.cloudinary.com/dk0n7fyjj/image/upload/v1651202373/P1010239_rwedkr.jpg")`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    margin: '5em',
    height: '50%',
    width: '80%',
    opacity: '0.8',
    position: 'absolute',
    zIndex: '-1',
}

const whiteBox = {
    backgroundColor: '#5c82a6',
    margin: '30px 30px 30px 30px',
    opacity: '0.7',
    height: '47%',
    width: '47%',
    position: 'absolute',
    zIndex: '-1',
    boxShadow: '0 30px 40px white',
}




const SignIn = (props) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

	const onSignIn = (event) => {
		event.preventDefault()
        console.log('the props', props)
		const { msgAlert, setUser } = props

        const credentials = {email, password}

		signIn(credentials)
			.then((res) => setUser(res.data.user))
			.then(() => navigate('/'))
			.catch((error) => {
                setEmail('')
                setPassword('')
				msgAlert({
					heading: 'Sign In Failed with error: ' + error.message,
					message: messages.signInFailure,
					variant: 'danger',
				})
			})
	}

    return (
        
            <div className='row'>
                <div className='col-sm-10 col-md-8 mx-auto mt-5'style={fontStyle}>
                    <h3><strong>Sign In</strong></h3>
                    <Form onSubmit={onSignIn}>
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
                        <Button type='submit'>
                            Submit
                        </Button>
                    </Form>
                </div>
                <div style={pageBackground}> </div>
                <div style={whiteBox}> </div>
        </div>
    )
}

export default SignIn
