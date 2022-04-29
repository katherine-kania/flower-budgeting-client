import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'

const linkStyle = {
    color: '#6f8760',
    textDecoration: 'none',
	margin: '10px',
	fontFamily: 'Quattrocento',
	margin: '.5em',
	fontSize: '.8em',
	fontWeight: 'bolder',
}

const headerLogo = {
	color: '#6f8760',
    textDecoration: 'none',
	margin: '10px',
	fontFamily: 'Poiret One',
	margin: '1em',
	fontSize: '1.4em',
	fontWeight: 'bolder',
}

const authenticatedOptions = (
	<>
		<Nav.Item className="m-2" >
			<Link to='change-password' style={linkStyle}>
				Change Password
			</Link>
		</Nav.Item>
		<Nav.Item className="m-2" >
			<Link to='sign-out' style={linkStyle}>
				Sign Out
			</Link>
		</Nav.Item>
		<Nav.Item className="m-2">
			<Link to='flowers' style={linkStyle}>Flowers</Link>
		</Nav.Item>
		<Nav.Item className="m-2">
			<Link to='orders/create' style={linkStyle}>Create Order</Link>
		</Nav.Item>
		<Nav.Item className="m-2">
			<Link to='orders' style={linkStyle}>My Orders</Link>
		</Nav.Item>
	</>
)

const unauthenticatedOptions = (
	<>
        <Nav.Item className="m-2">
		    <Link to='sign-up' style={linkStyle}>Sign Up</Link>
        </Nav.Item>
        <Nav.Item className="m-2">
		    <Link to='sign-in' style={linkStyle}>Sign In</Link>
        </Nav.Item>
	</>
)

const alwaysOptions = (
	<>
		
	</>
)

const Header = ({ user }) => (
	<Navbar header-color expand='md' className='header-color'>
		<Navbar.Toggle aria-controls='basic-navbar-nav' />
		<Navbar.Collapse id='basic-navbar-nav'>
			<Nav className='ml-auto'>
				{user && (
					<span className='navbar-text mr-2'></span>
				)}
				{alwaysOptions}
				{user ? authenticatedOptions : unauthenticatedOptions}
			</Nav>
			
		</Navbar.Collapse>
		<Navbar.Brand>
            <Link to='/' style={headerLogo} className='header-text'>
                SHEARS AND ROOTS
            </Link>
        </Navbar.Brand>
	</Navbar>
)

export default Header
