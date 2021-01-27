//CLOCK Start
console.clear();

function CountdownTracker(label, value){

  var el = document.createElement('span');

  el.className = 'flip-clock__piece';
  el.innerHTML = '<b class="flip-clock__card card"><b class="card__top"></b><b class="card__bottom"></b><b class="card__back"><b class="card__bottom"></b></b></b>' + 
    '<span class="flip-clock__slot">' + label + '</span>';

  this.el = el;

  var top = el.querySelector('.card__top'),
      bottom = el.querySelector('.card__bottom'),
      back = el.querySelector('.card__back'),
      backBottom = el.querySelector('.card__back .card__bottom');

  this.update = function(val){
    val = ( '0' + val ).slice(-2);
    if ( val !== this.currentValue ) {
      
      if ( this.currentValue >= 0 ) {
        back.setAttribute('data-value', this.currentValue);
        bottom.setAttribute('data-value', this.currentValue);
      }
      this.currentValue = val;
      top.innerText = this.currentValue;
      backBottom.setAttribute('data-value', this.currentValue);

      this.el.classList.remove('flip');
      void this.el.offsetWidth;
      this.el.classList.add('flip');
    }
  }
  
  this.update(value);
}


function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  return {
    'Total': t,
    'Minutes': Math.floor((t / 1000 / 60) % 60),
    'Seconds': Math.floor((t / 1000) % 60)
  };
}

function Clock(countdown,callback) {
  
  countdown = countdown ? new Date(Date.parse(countdown)) : false;
  callback = callback || function(){};
  
  var updateFn = countdown ? getTimeRemaining : getTime;

  this.el = document.createElement('div');
  this.el.className = 'flip-clock';

  var trackers = {},
      t = updateFn(countdown),
      key, timeinterval;

  for ( key in t ){
    if ( key === 'Total' ) { continue; }
    trackers[key] = new CountdownTracker(key, t[key]);
    this.el.appendChild(trackers[key].el);
  }

  var i = 0;
  function updateClock() {
    timeinterval = requestAnimationFrame(updateClock);
    
    // throttle so it's not constantly updating the time.
    if ( i++ % 10 ) { return; }
    
    var t = updateFn(countdown);
    if ( t.Total < 0 ) {
      cancelAnimationFrame(timeinterval);
      for ( key in trackers ){
        trackers[key].update( 0 );
      }
      callback();
      return;
    }
    
    for ( key in trackers ){
      trackers[key].update( t[key] );
    }
  }

  setTimeout(updateClock,500);
}

var deadline = new Date(Date.parse(new Date()) + 12 * 24 * 60 * 60 * 1000);
var c = new Clock(deadline, function(){ alert('countdown complete') });
document.body.appendChild(c.el);

var clock = new Clock();
document.body.appendChild(clock.el);









//CLOCK END


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
      body: JSON.stringify({"email":'@gmail.com', "id":userId, 'callName':'Personal Finance' , 'eventName':'python event'}),
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
    chrome.storage.local.set({dailyEvents: json.dailyEvents})    
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
