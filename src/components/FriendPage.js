import React from 'react'
import WebsitePanel from './WebsitePanel'
import ChatPanel from './ChatPanel'
import ProfilePanel from './ProfilePanel'

const FriendPage = () => {
	return (
		<div className='container'>
			<div className='h1_place_holder'>
			</div>
			<div className='row'>
				<h1 className=''>friend name.</h1>
			</div>
			<div className='row justify-contents-center'>
				<div className='col-2'>
					<ProfilePanel />
				</div>
				<div className='col-6 offset-1'>
					<WebsitePanel />
				</div>
				<div className='col-2  offset-1'>
					<ChatPanel />
				</div>
			</div>		</div>
	);
}

export default FriendPage