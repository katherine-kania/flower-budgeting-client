const Home = (props) => {
	// const { msgAlert, user } = props
	console.log('props in home', props)

	const pageBackground = {
		display: 'flex',
		justifyContent: 'center',
		flexFlow: 'row wrap',
		backgroundImage: `url(./public/img/floral-01.jpg)`,
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
  		height:'100vh',
		backgroundColor: 'white',
		opacity: '0.6'
	}


	return (
		<div style={pageBackground}>
			
			<h2>Home Page</h2>
		</div>
	)
}

export default Home
