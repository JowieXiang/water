import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Redirect} from 'react-router-dom'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import UserWebsite from './UserWebsite'
import FriendPanel from './FriendPanel'
import PersonalProfile from './PersonalProfile'


class PersonalPage extends Component {

	render() {
		const { auth, profile } = this.props;
		if (!auth.uid) return <Redirect to='/' /> //route guard
		return (
			<div className='container'>
				<div className='h1_place_holder'>
				</div>
				<div className='row'>
					<h1 className=''>user name.</h1>
				</div>
				<div className='row justify-contents-center'>
					<div className='col-2'>
						<PersonalProfile profile= {profile}/>
					</div>
					<div className='col-6 offset-1'>
						{ <UserWebsite profile= {profile}/> }
					</div>
					<div className='col-2  offset-1'>
						<FriendPanel profile= {profile}/>
					</div>
				</div>
			</div>
		);
	}
}

//将登陆状态传入this.props
const mapStateToProps = (state) => {

	return {
		auth: state.firebase.auth,
		profile: state.firebase.profile,

	}
}
export default compose(
    connect(mapStateToProps)
)(PersonalPage)
