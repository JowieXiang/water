import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class Navbar extends Component {
	render() {
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
}

export default Navbar