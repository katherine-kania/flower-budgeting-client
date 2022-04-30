import React from 'react'

const Home = (props) => {
	// const { msgAlert, user } = props
	console.log('props in home', props)

	const pageBackground = {
		backgroundColor: '#99a98f',
		opacity: '0.8',
		margin: '20px',
		display: 'flex',
		justifyContent: 'center',
		flexFlow: 'row wrap',
		padding: '2em'
	}

	const imgCircle = {
		padding: '25vh',
		height:'55vh',
		width:'55vh',
		borderRadius: '100%',
		backgroundImage: `url("https://res.cloudinary.com/dk0n7fyjj/image/upload/v1651202308/shearsandroots01_small_yvvzc9.jpg")`,
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		border: 'thin solid grey'
		
	}

	const colorCircle = {
		padding: '27vh',
		backgroundColor: '#5c82a6',
		borderRadius: '100%',
		opacity: '0.5',
		position: 'relative', 
		zIndex: '-1',
		right: '20em',
	}

	const pFont = {
		fontFamily: 'Poiret One',
		color: "white",
		width: "60vh", 
		float: 'right',
		padding: '1.3em',
		fontSize: '1.4em',
		fontWeight: 'bolder',
	}


	return (
		<>
		<div style={pageBackground}>
			<p style={pFont}>
				Hi there!
				Welcome to our floral site. Here you can learn a bit more about flowers and the 
				studio. Through our site you can make, save and inquire custom floral orders from us.
			</p>
			<div style={imgCircle}>
				<div style={colorCircle}>
				</div>
			</div>
			
		</div>
		</>
	)
}

export default Home
