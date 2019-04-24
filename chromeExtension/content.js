console.log('Ooooooops!');

//find the 'showMarkers' button and set the listener to showMarkers function


//一旦收到从background传来的message，就执行passMessage功能
chrome.runtime.onMessage.addListener(passMessage);


//把background端的ipList传输到content端
function passMessage(data, sender, sendResponse) {
	if (data) {
		localStorage.setItem("ipList", JSON.stringify(data));//从background接收到的data传入LocalStorage
		var ipList = JSON.parse(localStorage.getItem("ipList"));//LocalStorage中的string parse成object

	}
}




