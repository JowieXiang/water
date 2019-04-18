import React from 'react'

const FriendPanel =(props)=> {

		return (
			<div>
				<div className='row'>
					<h2>friends.</h2>
				</div>
				<div className='row justify-contents-center'>
					<div className='col-6 col-md-4 justify-contents-center'>
						<div className='friendInstance' />
					</div>
					<div className='col-6 col-md-4 justify-contents-center'>
						<div className='friendInstance' />
					</div>

				</div>
			</div>
		);
}

export default FriendPanel