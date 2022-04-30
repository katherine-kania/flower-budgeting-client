import { useNavigate } from 'react-router-dom'

import {Button, ButtonGroup} from 'react-bootstrap'

import { signOut } from '../../api/auth'
import messages from '../shared/AutoDismissAlert/messages'

const fontStyle = {
    color: 'white',
	fontFamily: 'Poiret One',
	fontSize: '1em',
	fontWeight: 'bolder',
    padding: '5em'
}
const pageBackground = {
    backgroundImage: `url("https://res.cloudinary.com/dk0n7fyjj/image/upload/v1651202308/shearsandroots01_small_yvvzc9.jpg")`,
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

const SignOut = (props) => {
	const { msgAlert, clearUser, user } = props
    console.log(props)

    const navigate = useNavigate()

    const onSignOut = () => {
		signOut(user)
			.finally(() => navigate('/'))
			.finally(() => clearUser())
    }

    const onCancel = () => {
        navigate('/')
    }

	return (
		<>
            <div className='row'>
                <div className='col-sm-10 col-md-8  mt-5'style={fontStyle}>
                    <h4>Are you sure you want to sign out?</h4>
                    <h4>We hate to see you go...</h4>
                    <div>
                        <Button style={{marginRight: '1em'}} onClick={onSignOut}>
                            Sign Out
                        </Button>
                        <Button onClick={onCancel}>
                            Cancel
                        </Button>
                    </div>
                </div>
                <div style={pageBackground}> </div>
                <div style={whiteBox}> </div>
            </div>
		</>
	)
}

export default SignOut
