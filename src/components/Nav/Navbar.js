import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'
import BeginModal from '../modal/BeginModal'
import icons from 'glyphicons'

class Navbar extends Component {

	state = {
		showModal: false
	}

	toggleModal = () => {
		const toggle = !this.state.showModal;
		this.setState({
			showModal: toggle
		})
	}

	render() {
		const { auth, profile } = this.props;
		// console.log(profile);

		const links = auth.uid ? <SignedInLinks auth={auth} profile={profile} /> : <SignedOutLinks />;
		return (
			<div>
				<nav className="navbar navbar-expand-lg fixed-top" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", color: "#82ca9d" }} >
					<div className='container'>
						<Link to='/' className='navbar-brand default-link' href="#">{icons.ferry} Water.
						</Link>
						
						<div className="navbar-collapse justify-content-end" >
							{links}
						</div>
						<button className="modal-toggle" onClick={this.toggleModal} title="how to use 'water'?"><strong>?</strong></button>
					</div>
				</nav>
				{this.state.showModal ? <BeginModal toggleModal={this.toggleModal} /> : null}
			</div>
		);
	}
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