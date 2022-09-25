import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
	return (
		<nav className='nav-container'>
			<div className='nav-elements'>
				<Link to='/'>SettDB </Link>
				<Link to='about'>About</Link>
			</div>
		</nav>
	);
};

export default Navbar;
