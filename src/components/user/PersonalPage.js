import React, { Component } from 'react'
import UserWebsite from './UserWebsite'
import FriendPanel from './FriendPanel'
import PersonalProfile from './PersonalProfile'


class PersonalPage extends Component {
	render() {
	 return (
		<div className='container'>
			<div className='h1_place_holder'>
			</div>
			<div className='row'>
				<h1 className=''>user name.</h1>
			</div>
			<div className='row justify-contents-center'>
				<div className='col-2'>
					<PersonalProfile />
				</div>
				<div className='col-6 offset-1'>
					<UserWebsite />
				</div>
				<div className='col-2  offset-1'>
					<FriendPanel />
				</div>
			</div>
		</div>
	);
}
}

export default PersonalPage