// CLOCK END

// fetch('http://127.0.0.1:5000/get/info').then(response => response.json())
// .then(data => {eventName = JSON.stringify(data); console.log(eventName)}).then(function(eventName){
//   if (eventName === 'None'){
//     console.log('event name is None')
//   }
//   else{
//     // startTimer(eventName);
//     // chrome.storage.local.set({'event': value}
//     console.log('passed event name to StartTimer func')
//   }
// }).catch(console.log('error from get event name func'))

// fetch('http://127.0.0.1:5000/list').then(response => response.json())
// .then(data => {calNames = JSON.stringify(data); console.log(calNames)}).then(function(eventName){
//   console.log('cal names are '+ calNames)
//   chrome.storage.local.set({cal:calNames});
// }).catch(console.log('couldnt retrive events'))

// fetch('http://0.0.0.0:5000/test',
//     {
//           method:'POST',
//           body: JSON.stringify({"name":"event"}),
//           headers: {
//               "Content-Type": "application/json",
//               'Accept': 'application/json'
//             }
//         })
//         .then(response => response.json())
//       .then(json => console.log(JSON.stringify(json)));

// chrome.identity.getAuthToken({ 'interactive': true }, function(token) {
//   if (token){alert('token is ' + token)}
//   else{alert('token not present')}
// });  //possibly take out as access token wouldn't match with another as they frequently change

function submit() {
	console.log('submitted')
	alert('kheloo')
	chrome.identity.getProfileUserInfo(function (userInfo) {
		console.log(JSON.stringify(userInfo))
		const userEmail = userInfo.email
		const userId = userInfo.id
		calName = document.getElementById('cars') // name of calendar (for goals)
		// let eventName = document.getElementById('enter').onclick; //eventName
		console.log(userEmail, userId)
		fetch('http://127.0.0.1:5000/execute', {
				method: 'POST',
				body: JSON.stringify({
					email: '@gmail.com',
					id: userId,
					callName: 'Personal Finance',
					eventName: 'python event'
				}),
				headers: {
					'Content-Type': 'application/json;charset=UTF-8',
					Accept: 'application/json'
				}
			})
			.then((response) => response.json())
			.then(function (json) {
				if (json.message==='daily limit of 5 reached. Subscribe for unlimited access'){ //FIXME: sentence should not be hardcoded
					alert('daily limit of 5 reached. Subscribe for unlimited access') //TODO: provide a link			
				}
				else{
					chrome.storage.local.set({executeResponse: json.message})
				}
			})
			.catch(console.log('didnt receive data')) // add err in function
	})
}

var views = chrome.extension.getViews({
	type: 'popup'
})
for (var i = 0; i < views.length; i++) {
	views[i].document
		.getElementById('submit')
		.addEventListener('click', submit)
	console.log('loaded')
}

function current() {
	// should be merged with start() func
	chrome.identity.getProfileUserInfo(function (userInfo) {
		console.log(JSON.stringify(userInfo))
		const userEmail = userInfo.email
		const userId = userInfo.id
		fetch('http://127.0.0.1:5000/current', {
				method: 'POST',
				body: JSON.stringify({
					email: userEmail,
					id: userId
				}),
				headers: {
					'Content-Type': 'application/json;charset=UTF-8',
					Accept: 'application/json'
				}
			})
			.then((response) => response.json()) // this can prolly be taken out
			.then(function (json) {
				chrome.storage.local.set({
					currentEvent: json.event
				})
				chrome.storage.local.set({
					list: json.list
				})
				chrome.storage.local.set({
					dailyEvents: json.dailyEvents
				})
				document.getElementById('enter').onclick = json.event // name of event
			})
			.catch(console.log('didnt receive data')) // add err in function
	})
}

var views = chrome.extension.getViews({
	type: 'popup'
})
for (var i = 0; i < views.length; i++) {
	views[i].document.getElementById('start').addEventListener('click', current)
	console.log('loaded')
}

chrome.storage.local.set({
	key: 'hello'
}, function () {
	console.log('Value is set to back' + 'test')
})

// chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
//   console.log(response.farewell);
// });

// chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//   chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
//     console.log(response.farewell);
//   });
// });

// fetch('http://127.0.0.1:5000/Time').then(response => response.json())
// .then(data => {time = JSON.stringify(data); console.log(time)}).then(function(time){
//   if (time === '30'){
//     console.log('30 minutes')
//   }
//   else if (time =='1'){
//     console.log('1 hour')
//   }
//   else{
//     console.log('nothing printed')
//   }
// }).catch(console.log('error from getting time config'))

function start() {
	document.getElementById('start').style.backgroundColor = '#81D481'
	var clock = new Clock()
	document.body.appendChild(clock.el)
}

function myFunction() {
	document.getElementById('myDropdown').classList.toggle('show')
}

function sub() {
	var clock = new Clock()
	document.body.appendChild(clock.el)
}