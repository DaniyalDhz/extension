

//----------------TIMER----------------------------------------------------------------

// const FULL_DASH_ARRAY = 283;
// const RESET_DASH_ARRAY = `-57 ${FULL_DASH_ARRAY}`;

//TODO: timer funcs should be mvoed to background

//All buttons
var startBtn = document.querySelector(".start");
var stopBtn = document.querySelector(".stop");
var resetBtn = document.querySelector(".reset");


//DOM elements
var timer = document.querySelector("#base-timer-path-remaining");
var timeLabel = document.getElementById("base-timer-label");

//Time related vars
var TIME_LIMIT = 5; //in seconds
var timePassed = -1;
var timeLeft = TIME_LIMIT;
var timerInterval = null;

function reset() {
  clearInterval(timerInterval);
  resetVars();
  startBtn.innerHTML = "Start";
  timer.setAttribute("stroke-dasharray", RESET_DASH_ARRAY);
}



// function start() {
//   startBut.removeEventListener("click", Start)
  
//   startBut.value = "Stop"
//   startTimer();
// }


function start(withReset = false) {
  setDisabled(startBtn);
  removeDisabled(stopBtn);
  startBtn.innerHTML = "Resume";
  if (withReset) {
    resetVars();
  }
  startTimer();
}

// function stop() {
//   startBut.removeEventListener("click", Start)
//   startBut.addEventListener("click",stop)
//   startBut.value = "Start"
  
// }

function stop() {
  setDisabled(stopBtn);
  removeDisabled(startBtn);
  startBtn.innerHTML = "Resume";
  clearInterval(timerInterval);
}

function startTimer(eventName) {
  timerInterval = setInterval(() => {
    timePassed = timePassed += 1;
    timeLeft = TIME_LIMIT - timePassed;
    timeLabel.innerHTML = formatTime(timeLeft);
    setCircleDasharray();
    document.getElementById("mytext").value = eventName;
    if (timeLeft === 0) {
      timeIsUp();
    }
  }, 1000);
}

// window.addEventListener("load", () => {
//   timeLabel.innerHTML = formatTime(TIME_LIMIT);
//   setDisabled(stopBtn);
// });

//---------------------------------------------
//HELPER METHODS
//---------------------------------------------
function setDisabled(button) {
  button.setAttribute("disabled", "disabled");
}

function removeDisabled(button) {
  button.removeAttribute("disabled");
}
function timeIsUp() {
  setDisabled(startBtn);
  removeDisabled(stopBtn);
  clearInterval(timerInterval);
  // chrome.storage.local.get(['event'] = w);
  let confirmReset = document.getElementById("mytext").value = w;
  if (confirmReset) {
    reset();
    // startTimer();
  } else {
    reset();
  }
}

function resetVars() {
  removeDisabled(startBtn);
  setDisabled(stopBtn);
  timePassed = -1;
  timeLeft = TIME_LIMIT;
  console.log(timePassed, timeLeft);
  timeLabel.innerHTML = formatTime(TIME_LIMIT);
}

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  return `${minutes}:${seconds}`;
}

function calculateTimeFraction() {
  const rawTimeFraction = timeLeft / TIME_LIMIT;
  return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
}

function setCircleDasharray() {
  const circleDasharray = `${(
    calculateTimeFraction() * FULL_DASH_ARRAY
  ).toFixed(0)} 283`;
  console.log("setCircleDashArray: ", circleDasharray);
  timer.setAttribute("stroke-dasharray", circleDasharray);
}




//-----------------------------------------------------------------------------------------
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
  let eventName = document.forms["loginForm"]["fname"];
  console.log(eventName);
}

function getInputValue(){
  // Selecting the input element and get its value 
  let inputVal = document.getElementById("myInput").value;
  
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

function submit(){
  console.log('submitted');
  alert('kheloo');
  chrome.identity.getProfileUserInfo(function(userInfo) {
    console.log(JSON.stringify(userInfo));
    let userEmail = userInfo.email;
    let userId = userInfo.id;
    calName = document.getElementById("cars"); //name of calendar (for goals)
    // let eventName = document.getElementById('mytext').onclick; //eventName
    console.log(userEmail,userId)
    fetch('http://127.0.0.1:5000/execute',
    {
      method:'POST',
      body: JSON.stringify({"email":'daniyaldehleh@gmail.com', "id":userId, 'callName':'Personal Finance' , 'eventName':'python event'}),
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        'Accept': 'application/json'
      }       
    })
  .then(response => response.json())
  .then(json => chrome.storage.local.set({'executeResponse': json.message})) //TODO: should be displayed on the popup
  .catch(console.log('didnt receive data')) //add err in function
  });
}


var views = chrome.extension.getViews({
  type: "popup"
  });
  for (var i = 0; i < views.length; i++) {
  views[i].document.getElementById('checkButton').addEventListener("click", submit);
  console.log("loaded");
  }





function current(){ //should be merged with start() func
  chrome.identity.getProfileUserInfo(function(userInfo) {
    console.log(JSON.stringify(userInfo));
    let userEmail = userInfo.email;
    let userId = userInfo.id;
    
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
    chrome.storage.local.set({list: json.list})    
    document.getElementById('mytext').onclick = json.event; //name of event
  })
  .catch(console.log('didnt receive data')) //add err in function
  });
}

var views = chrome.extension.getViews({
  type: "popup"
  });
  for (var i = 0; i < views.length; i++) {
  views[i].document.getElementById('start').addEventListener("click", current);
  console.log("loaded");
  }


chrome.storage.local.set({key: 'hello'}, function() {
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