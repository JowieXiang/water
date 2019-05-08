import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'

const Navbar = (props) => {

		const { auth,profile } = props;
		// console.log(profile);
		const links = auth.uid ? <SignedInLinks auth = {auth} profile={profile}/> : <SignedOutLinks />;
		return (
			<nav className="navbar navbar-expand-lg navbar-light bg-transparent fixed-top">
				<div className='container'>
					<Link to='/'className='navbar-brand' style={{color:"white", fontSize:"25pt"}} href="#">Water.
					</Link>
					<div className="navbar-collapse justify-content-end" >
						{links}
					</div>
				</div>
			</nav>
		);
	
}

//将登陆状态传入this.props
const mapStateToProps = (state) => {
    // console.log(state);
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar)