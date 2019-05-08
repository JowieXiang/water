//this component shows websites collection of the logged-in user
import React from 'react'

const TimeBoard = (props) => {

	const { auth, profile, userDoc } = props;

	console.log(userDoc);
	// var thisWebsiteList;
	// for (var i=0 ; i < websiteList.length ; i++){
	// 	if(websiteList[i].id == auth.uid)
	// 	{
	// 		thisWebsiteList=websiteList[i];
	// 	}
	// }

	return (
		<div>
			<div className='row'>
				<h2>time.</h2>
			</div>
			{/* <div className='row justify-contents-center'>
				{(userDoc.websiteList && userDoc.websiteList.length > 0) && userDoc.websiteList.map(website => {
					return (
						<div className='col-3 justify-contents-center'>
							<div className='websiteInstance'>{website.domain}</div>
						</div>
					)
				}
				)
				}
			</div> */}
		</div>
	);

}

export default TimeBoard