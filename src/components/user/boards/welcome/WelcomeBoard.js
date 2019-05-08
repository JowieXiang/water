//this component shows websites collection of the logged-in user
import React from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

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
	const data = [
		{ name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
		{ name: 'Page B', uv: 300, pv: 2400, amt: 2400 },
		{ name: 'Page C', uv: 300, pv: 2400, amt: 2400 },
		{ name: 'Page D', uv: 200, pv: 2400, amt: 2400 },
		{ name: 'Page E', uv: 100, pv: 2400, amt: 2400 },
		{ name: 'Page F', uv: 400, pv: 2400, amt: 2400 }
	];

	const renderLineChart = (
		<LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
			<Line type="monotone" dataKey="uv" stroke="#8884d8" />
			<CartesianGrid stroke="#ccc" strokeDasharray="3 5" />
			<XAxis dataKey="name" />
			<YAxis />
			<Tooltip />
		</LineChart>
	);


	return (
		<div>
			<div className='row'>
				<h2 style={{ color: "white" }}>WELCOME.</h2>
				<br />

			</div>
			<div className='row justify-content-center'>

				<div>{renderLineChart}</div>
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