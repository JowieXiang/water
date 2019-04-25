//this component shows websites collection of the logged-in user
import React from 'react'

const UserWebsite = (props) => {
	const { websites } = props.profile;
	return (
		<div>
			<div className='row'>
				<h2>websites.</h2>
			</div>
			<div className='row justify-contents-center'>
				{websites && websites.map(website => {
					return (
						<div className='col-3 justify-contents-center'>
							<div className='websiteInstance'>website.</div>
						</div>
					)
				}
				)
				}
			</div>
		</div>
	);

}

export default UserWebsite