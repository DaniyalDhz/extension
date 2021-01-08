//chrome identity



// let email = 'daniyaldehleh@gmail.com'
// let startTime = '2PM'
// let endTime = '3PM'
// let calendarName = 'programming'


// let user = {
//   'email':email,
//   'startTime':startTime,
//   'endTime':endTime,
//   'calendarName':calendarName
// };



function checkLogin(event){
  var eventName = document.forms["loginForm"]["fname"];
  console.log(eventName);
}

function getInputValue(){
  // Selecting the input element and get its value 
  var inputVal = document.getElementById("myInput").value;
  
  // Displaying the value
  alert(inputVal);
}



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

function postEvent(){
  chrome.identity.getProfileUserInfo(function(userInfo) {
    console.log(JSON.stringify(userInfo));
    let userEmail = userInfo.email;
    let userId = userInfo.id;
    // let calendarName = document.getElementById('mytext').onclick;
    console.log(userEmail,userId)
    fetch('http://127.0.0.1:5000/execute',
    {
      method:'POST',
      body: JSON.stringify({"email":userEmail, "id":userId, 'CalendarName':'python event'}),
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        'Accept': 'application/json'
      }       
    })
  .then(response => response.json())
  .then(json => console.log(JSON.stringify(json)))
  .catch(console.log('didnt receive data')) //add err in function
  });
}
// postEvent();

function current(){
  chrome.identity.getProfileUserInfo(function(userInfo) {
    console.log(JSON.stringify(userInfo));
    let userEmail = userInfo.email;
    let userId = userInfo.id;
    // let calendarName = document.getElementById('mytext').onclick;
    console.log(userEmail,userId)
    fetch('http://127.0.0.1:5000/current',
    {
      method:'POST',
      body: JSON.stringify({"email":userEmail, "id":userId}),
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        'Accept': 'application/json'
      }       
    })
  .then(response => response.json()) //this can prolly be taken out
  .then(function(json){
    chrome.storage.local.set({'currentEvent': json.event})
    chrome.storage.local.set({'currentEvent': json.list})    
  })
  .catch(console.log('didnt receive data')) //add err in function
  });
}
current();



let value = 'test';
chrome.storage.local.set({key: value}, function() {
  console.log('Value is set to back' + 'test');
});

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