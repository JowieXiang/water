import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Sidebar = (props) => {
	const { uid } = props;
	console.log(uid);

	return (
		<div style={{position:"fixed"}}>
			<div className="row align-items-center" style={{height:200}}>
				<div className="col-auto offset-3">
					<Link to={'/personalPage/' + uid + '/where'} className="text-white"><h6>Where</h6></Link>
					<Link to={'/personalPage/' + uid + '/what'} className="text-white"><h6>What</h6></Link>
					<Link to={'/personalPage/' + uid + '/when'} className="text-white"><h6>When</h6></Link>
					<Link to={'/personalPage/' + uid + '/friends'} className="text-white"><h6>Friends</h6></Link>
				</div>
			</div>
		</div>
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

export default connect(mapStateToProps)(Sidebar)