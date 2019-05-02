
let tabList = [];
let tabItem = {};
let homePageTab = -1;//存储homepage的tabId
const homeUrl = 'http://localhost:3000/'; // homepage地址


//每次网页加载时将tabItem载入tabList
chrome.webRequest.onCompleted.addListener((details) => {
	//如果访问页面为homepage，则设定homePageTab
	if (details.url == homeUrl) {
		homePageTab = details.tabId;
	} else {
		//把所有tabItem中的ip都导入一个数组
		var ipList = [];
		if(tabList.length>0){
		ipList = tabList.map(element => { return element.ip });
		}
		//把网页detail中的url条目赋值给ip	
		if (details.url && details.ip && ipList.includes(details.ip) == false) {
			tabItem = {
				tabId: details.tabId,
				ip: details.ip,
				domain: details.url.split('/')[2]
			}
			tabList.push(tabItem);
			sendMessage();
		}
	}
	// console.log('added tablist = ' + tabList);
	// console.log("new tab's url = " + details.url);
	// console.log("new tab = " + details.tabId);
	// console.log("homeTAB = " + homePageTab);

}, { 'urls': [], 'types': ['main_frame'] });

//每次网页关闭时将ip移出ipList
chrome.tabs.onRemoved.addListener((tabId, removeInfo) => {

	//更新homepage tab
	if (tabId == homePageTab) {
		homePageTab = -1;
	}
	//把关闭的tab从tabInfo中去掉
	tabList = tabList.filter((element) => {
		return element.tabId != tabId
	});
	sendMessage();
	// console.log("substracted tab list =" + tabList);
	// console.log("closed tab = " + tabId);
	// console.log("homeTAB = " + homePageTab);
}

);


//初次打开homepage时，将所有其他浏览器中的tab信息都传入homepage
chrome.tabs.onUpdated.addListener((tab) => {
	//	// get all the tabs in the window
	// chrome.tabs.query({windowId: chrome.windows.WINDOW_ID_CURRENT}, (tabs)=>{
	// 	console.log(tabs);
	// })
	sendMessage();

})


//把新收到的ip传送到指定网页
function sendMessage() {
	let queryParams = {
		//active:true,
		//currentWindow:true,
		url: homeUrl
	};
	chrome.tabs.query(queryParams, sendMsg);
	function sendMsg(tabs) {
		if (tabs[0]) {
			// const tabIp = tabList.map(element => element.ip);
			chrome.tabs.sendMessage(tabs[0].id, tabList);

		}
	}
}