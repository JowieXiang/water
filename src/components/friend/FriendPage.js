import React, { Component } from 'react'
import FriendWebsite from './FriendWebsite'
import ChatPanel from './ChatPanel'
import FriendProfile from './FriendProfile'
import { connect } from 'react-redux'

class FriendPage extends Component {
	render() {
		return (
			<div className='container'>
				<div className='h1_place_holder'>
				</div>
				<div className='row'>
					<h1 className=''>friend name.</h1>
				</div>
				<div className='row justify-contents-center'>
					<div className='col-2'>
						<FriendProfile />
					</div>
					<div className='col-6 offset-1'>
						<FriendWebsite />
					</div>
					<div className='col-2  offset-1'>
						<ChatPanel />
					</div>
				</div>
			</div>
		);
	}
}
//这里的state指的是reducer里面的state
const mapStatetoProps = (state) => {
	return {
		photo: state.photo,
		profile: state.profile
	}
}

export default connect(mapStatetoProps)(FriendPage)