import React from 'react'
import WebsitePanel from './WebsitePanel'
import FriendPanel from './FriendPanel'
import ProfilePanel from './ProfilePanel'


const PersonalPage = () => {
	return (
		<div className='container'>
			<div className='h1_place_holder'>
			</div>
			<div className='row'>
				<h1 className=''>user name.</h1>
			</div>
			<div className='row justify-contents-center'>
				<div className='col-2'>
					<ProfilePanel />
				</div>
				<div className='col-6 offset-1'>
					<WebsitePanel />
				</div>
				<div className='col-2  offset-1'>
					<FriendPanel />
				</div>
			</div>
		</div>
	);
}

export default PersonalPage