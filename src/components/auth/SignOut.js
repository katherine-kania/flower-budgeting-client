import { useNavigate } from 'react-router-dom'

import {Button, ButtonGroup} from 'react-bootstrap'

import { signOut } from '../../api/auth'
import messages from '../shared/AutoDismissAlert/messages'

const fontStyle = {
    color: '#5c82a6',
	fontFamily: 'Quattrocento',
	fontWeight: 'bolder',
    margin: ''
}
const pageBackground = {
    backgroundColor: '#99a98f',
    backgroundImage: `url("https://res.cloudinary.com/dk0n7fyjj/image/upload/v1651008202/snapdragon_yellow_ms5n9i.jpg")`,
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
    width: '70%',
    position: 'absolute',
    zIndex: '-1',
}

const SignOut = (props) => {
	const { msgAlert, clearUser, user } = props
    console.log(props)

    const navigate = useNavigate()

    const onSignOut = () => {
		signOut(user)
			.finally(() =>
				msgAlert({
					heading: 'Signed Out Successfully',
					message: messages.signOutSuccess,
					variant: 'success',
				})
			)
			.finally(() => navigate('/'))
			.finally(() => clearUser())
    }

    const onCancel = () => {
        navigate('/')
    }

	return (
		<>
            <div className='row' style={fontStyle}>
                <div className='col-sm-10 col-md-8  mt-5' style={{margin: '10em'}}>
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
