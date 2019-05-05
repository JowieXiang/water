//this component shows websites collection of the logged-in user
import React from 'react'

const GeographicalBoard = (props) => {

	const { auth, profile, userDoc } = props;

	let mfCity;
	let mfCountry;
	let mfCityTimes;
	let mfCountryTimes;
	if (userDoc) {
		const cityList = userDoc.websiteList.map(element => { return element.city });
		const countryList = userDoc.websiteList.map(element => { return element.country });
		mfCity = MostFrequent(cityList).mfItem;
		mfCountry = MostFrequent(countryList).mfItem;
		mfCityTimes = MostFrequent(cityList).times;
		mfCountryTimes = MostFrequent(countryList).times;
		console.log(CountFrequency(cityList));
		console.log(CountFrequency(countryList));

	}

	//返回每一个item出现的次数
	function CountFrequency(arr) {
		var counts = {};
		for (var i = 0; i < arr.length; i++) {
			counts[arr[i]] = 1 + (counts[arr[i]] || 0);
		}
		return counts;
	}

	//返回出现次数最多的item和出现次数
	function MostFrequent(arr) {
		var mf = 1;
		var m = 0;
		var item;
		for (var i = 0; i < arr.length; i++) {
			for (var j = i; j < arr.length; j++) {
				if (arr[i] == arr[j])
					m++;
				if (mf < m) {
					mf = m;
					item = arr[i];
				}
			}
			m = 0;
		}
		return { mfItem: item, times: mf };
	}

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
				<div className='col-12'>
					<div className=" card card border-white text-white bg-transparent" >
						<div className="card-body">
							<h3 className="card-title">Geographic Footprint</h3>
							<p className="card-text">how many Cities.how many Cities.how many Citieshow many Cities.how many Cities.how many Cities.how many Cities.how many Cities</p>
						</div>
					</div>
				</div>
			</div>
			<br />
			<div className='row'>
				<div className='col-4'>
					<div className=" card border-white text-white bg-transparent" >
						<div className="card-body">
							<h3 className="card-title">City</h3>
							<p className="card-text">how many Cities: </p>
							<p className="card-text">most frequented City: {mfCity} </p>
							<p className="card-text">least frequented City:</p>
						</div>
					</div>
				</div>
				<div className='col-4'>
					<div className=" card border-white text-white bg-transparent" >
						<div className="card-body">
							<h3 className="card-title">Country</h3>
							<p className="card-text">how many Countries</p>
							<p className="card-text">most frequented Country: {mfCountry}</p>
							<p className="card-text">least frequented Country</p>
						</div>
					</div>
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
		</div>
	);

}

export default GeographicalBoard