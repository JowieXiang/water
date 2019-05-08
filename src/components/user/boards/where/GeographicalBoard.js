//this component shows websites collection of the logged-in user
import React from 'react'
import CountryPanel from './CountryPanel'
import VerticalBarChart from './VerticalBarChart'


const GeographicalBoard = (props) => {

	var sortedWebList = {};
	var chartData = [];

	const { auth, profile, userDoc } = props;

	if (userDoc) {
		sortedWebList = getSortedList(userDoc.websiteList, "country");
		chartData = countFrequency(sortedWebList);
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



	return (
		<div>
			<div className='row'>
				<div className='col-12'>
					<h2 className="text-white" style={{ color: "white" }}>Geographic Footprint</h2>
					<br />
					<p className="text-white">how many Cities.how many Cities.how many Citieshow many Cities.how many Cities.how many Cities.how many Cities.how many Cities</p>
				</div>
			</div>
			<br />
			<div className='row'>
				<div className='col-12'>
					{chartData ? <VerticalBarChart chartData={chartData} /> : null}
				</div>
			</div>
			<br />
			<div className='row' style={{color:"#82ca9d"}}>
				<h3>LIST OF WEBSITES.</h3>
			</div>
			{sortedWebList ? Object.values(sortedWebList).map(countryList => {
				return <CountryPanel countryList={countryList} />;
			})
				: null}
		</div>
	);

}

export default GeographicalBoard