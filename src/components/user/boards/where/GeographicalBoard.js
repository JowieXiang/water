//this component shows websites collection of the logged-in user
import React from 'react'
import {
	ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Bar, BarChart
} from 'recharts';
import CountryPanel from './CountryPanel'

const GeographicalBoard = (props) => {

	var sortedWebList = {};
	var chartData = [];
	var VerticalBarChart;
	const CustomTooltip = ({ active, payload, label }) => {
		if (active) {
			return (
				<div className="custom-tooltip">
					<p className="label text-white">{`${label} : ${payload[0].value}`}</p>
					{/* <p className="intro">{getIntroOfPage(label)}</p> */}
					<p className="desc text-white">Anything you want can be displayed here.</p>
				</div>
			);
		}
		return null;
	};



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

		sortedWebList = getSortedList(userDoc.websiteList, "country");
		chartData = countFrequency(sortedWebList);
		VerticalBarChart =
			<ResponsiveContainer width="95%" height={300}>
				<BarChart
					layout="vertical"
					// width={500}
					// height={300}
					data={chartData}
					margin={{
						top: 20, right: 30, left: 20, bottom: 5,
					}}
				>
					{/* <CartesianGrid strokeDasharray="3 3" /> */}
					<XAxis className="text-white" tick={{ fill: 'white' }} type="number" />
					<YAxis className="text-white" tick={{ fill: 'white' }} dataKey="key" type="category" />
					{/* <Tooltip content= {<CustomTooltip />}  /> */}
					{/* <Legend /> */}
					<Bar dataKey="frequency" barSize={20} fill="#82ca9d" />
					{/* <Bar dataKey="uv" barSize={20} fill="#413ea0" /> */}

					{/* <Line dataKey="pv" stroke="#8884d8" />
				<Line dataKey="uv" stroke="#82ca9d" /> */}
				</BarChart>
			</ResponsiveContainer>
			;
	}

	//将websiteList按照国别分成{国别：[{site},{site},{site}],国别：[{},{}],国别：[{},{},{},{}],...}
	function getSortedList(List, sortKey) {
		var sortedList = {};
		for (var i = 0; i < List.length; i++) {
			if (sortedList[List[i][sortKey]]) {
				sortedList[List[i][sortKey]].push(List[i]);
			} else {
				sortedList[List[i][sortKey]] = [];
				sortedList[List[i][sortKey]].push(List[i]);
			}
		}
		// console.log(sortedList);
		return sortedList;
	}

	function countFrequency(List) {
		var returnList = [];
		Object.keys(List).forEach(function eachKey(key) {
			returnList.push(
				{
					key: key,
					frequency: List[key].length,
					uv: 1890,
					pv: 4800,
					amt: 2181
				}
			);
		});
		// console.log(returnList);
		return returnList;
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
	return (

		<div>
			<div className='row'>
				<div className='col-12'>
					<h2 className="text-white">Geographic Footprint</h2>
					<br />
					<p className="text-white">how many Cities.how many Cities.how many Citieshow many Cities.how many Cities.how many Cities.how many Cities.how many Cities</p>
				</div>
			</div>
			<br />
			<div className='row'>
				<div className='col-12'>
					{chartData ? VerticalBarChart : null}
				</div>
			</div>
			<br />
			<div className='row'>
				<div className='col-4'>
					<div className=" card  text-white bg-transparent" >
						<div className="card-body">
							<h3 className="card-title">City</h3>
							<p className="card-text">how many Cities: </p>
							<p className="card-text">most frequented City: {mfCity} </p>
							<p className="card-text">least frequented City:</p>
						</div>
					</div>
				</div>
				<div className='col-4'>
					<div className=" card  text-white bg-transparent" >
						<div className="card-body">
							<h3 className="card-title">Country</h3>
							<p className="card-text">how many Countries</p>
							<p className="card-text">most frequented Country: {mfCountry}</p>
							<p className="card-text">least frequented Country</p>
						</div>
					</div>
				</div>

			</div>

			{sortedWebList ? Object.values(sortedWebList).map(countryList => {
				return <CountryPanel countryList={countryList} />;
			})
				: null}
		</div>
	);

}

export default GeographicalBoard