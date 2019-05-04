import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import UserWebsite from './UserWebsite'
import FriendPanel from './FriendPanel'
import PersonalProfile from './PersonalProfile'


class PersonalPage extends Component {


	render() {
		
		const { auth, profile, userWebsitesCollection } = this.props;

		//当userWebsitesCollection传入state后，react自动调用render,更新websitePanel
		let websitePanel;
		if (userWebsitesCollection && auth) {
			var userDoc = userWebsitesCollection.find(element => {
				return element.id === auth.uid;
			});
			websitePanel = <UserWebsite auth={auth} profile={profile} userDoc={userDoc} />;
		} else {
			websitePanel = null;
		}

		//route guard
		if (!auth.uid) return <Redirect to='/' /> 

		return (
			<div className='container'>
				<div className='h1_place_holder'>
				</div>
				<div className='row'>
					<h1 className=''>user name.</h1>
				</div>
				<div className='row justify-contents-center'>
					<div className='col-2'>
						<PersonalProfile profile={profile} />
					</div>
					<div className='col-6 offset-1'>
						{websitePanel}
					</div>
					<div className='col-2  offset-1'>
						<FriendPanel profile={profile} />
					</div>
				</div>
			</div>
		);
	}
}

//将登陆状态传入this.props
const mapStateToProps = (reduxState) => {

	return {
		auth: reduxState.firebase.auth,
		profile: reduxState.firebase.profile,
		userWebsitesCollection: reduxState.firestore.ordered.userWebsites
	}
}
export default compose(
	connect(mapStateToProps),
	firestoreConnect([
		{ collection: 'userWebsites' }
	])
)(PersonalPage)



