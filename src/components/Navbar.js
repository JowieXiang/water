import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-transparent">
			<div className='container'>
				<Link to='/'>
					<a class='navbar-brand' href="#">Internet Awareness</a>
				</Link>
			</div>
		</nav>
	);
}

export default Navbar