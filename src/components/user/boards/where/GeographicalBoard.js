//this component shows websites collection of the logged-in user
import React from 'react'
import CountryPanel from './CountryPanel'
import VerticalBarChart from './VerticalBarChart'
import icons from 'glyphicons'


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
		<div style={{ color: "#82ca9d" }}>
			<div className='row'>
				<div className='col-12' >
					<h2 >GEOGRAPHICS | 地理数据</h2>
					<br />
					<p>This chart shows the number of visits you have paid to servers located in these countries respectively.<br />
						下表显示你曾访问了哪些国家互联网服务器，以及访问的次数。
					</p>
				</div>
			</div>
			<br />
			<div className='row'>
				<div className='col-12'>
					{chartData ? <VerticalBarChart chartData={chartData} /> : null}
				</div>
			</div>
			<br />
			<div className='row'>
				<h4>LIST OF WEBSITES | 网站列表</h4>
			</div>
			{sortedWebList ? Object.values(sortedWebList).map(countryList => {
				return <CountryPanel countryList={countryList} />;
			})
				: null}
		</div>
	);

}

export default GeographicalBoard