import React from 'react'

const Home = (props) => {
	// const { msgAlert, user } = props
	console.log('props in home', props)

	const pageBackground = {
		display: 'flex',
		
		alignItems: 'baseline',
		flexFlow: 'row wrap',
		backgroundColor: '#99a98f',
		opacity: '0.8',
		margin: '20px',
		// backgroundImage: `url("https://res.cloudinary.com/dk0n7fyjj/image/upload/v1651008203/waxflower_white_jfs7fn.jpg")`,
		// backgroundSize: 'cover',
		// backgroundRepeat: 'no-repeat',

	}

	const imgCircle = {
		display: 'flex',
		justifyContent: 'left',
		padding: '20vh',
		backgroundColor: 'black',
		height:'50vh',
		width:'50vh',
		borderRadius: '100%',
		backgroundImage: `url("https://res.cloudinary.com/dk0n7fyjj/image/upload/v1651202308/shearsandroots01_small_yvvzc9.jpg")`,
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
	}
	const greenCircle = {
		display: 'flex',
		justifyContent: 'right',
		padding: '30vh',
		backgroundColor: 'white',
		height:'20vh',
		width:'20vh',
		borderRadius: '100%',
		opacity: '0.9',
		marginLeft: '100px'
	}


	return (
		<>
		<div style={pageBackground}>
			
			<h2 style={{color: "#5c82a6", zIndex: "3", width: "50%", justifyContent: 'right'}}>
				Hi there!
				Join our site to get access to the floral dictionary, learn a bit more about the 
				studio and make, save and inquire custom floral orders through our portal.
			</h2>
			<div style={imgCircle}>
				<div style={greenCircle}>
					<div style={{width: "200px"}}>
					</div>
				</div>
			</div>
			
		</div>
		</>
	)
}

export default Home
