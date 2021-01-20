
//TODO: POST url image of user & save in flask db



// chrome.identity.getProfileUserInfo(function(userInfo) {
//   console.log(JSON.stringify(userInfo));
//   let userEmail = userInfo.email;
//   let userId = userInfo.id;
// });

// function postEvent(){
//   chrome.identity.getProfileUserInfo(function(userInfo) {
//     console.log(JSON.stringify(userInfo));
//     let userEmail = userInfo.email;
//     let userId = userInfo.id;
//     let calendarName = document.getElementById('mytext').onclick;
//     fetch('http://0.0.0.1:5000/test',
//     {
//         method:'POST',
//         body: JSON.stringify({"email":userEmail, "id":userId, 'CalendarName':'python event'}),
//         headers: {
//           "Content-Type": "application/json;charset=UTF-8",
//           'Accept': 'application/json'
//         }       
//     })
//   .then(response => response.json())
//   .then(json => console.log(JSON.stringify(json)))
//   .catch(console.log('didnt receive data')) //add err in function
//   });
// }


// fetch('http://0.0.0.0:5000/test',
//     {
//         method:'POST',
//         body: JSON.stringify({"name":theeventName}),
//         headers: {
//           "Content-Type": "application/json;charset=UTF-8",
//           'Accept': 'application/json'
//         }       
//     })
//     .then(response => response.json())
//   .then(json => console.log(JSON.stringify(json))); 


// chrome.storage.local.get(['key'], function(result) {
//   console.log('Value currently is front ' + result.key);
// });


// console.log(typeof chrome.storage.local.get(['cal']));

chrome.storage.local.get(['list'], function(result) {
    if (result){
        for (i of result.list)
            {
            var option = document.createElement("option");
            option.text = i;
            option.value = "myvalue";
            // var select = document.getElementById("cars");
            // var select = document.querySelector("cars");
            var select = document.querySelector("#cars");
            select.appendChild(option);
            console.log(i + ' got appended')
            }
        }
    else(console.log('no events'));
});

chrome.storage.local.get(['dailyEvents'], function(result) {
    if (result){
        for (i of result.dailyEvents)
            {
            // var option = document.createElement("button");
            // option.text = i;
            // option.value = "myvalue";
            // var select = document.querySelector("#cars");
            // select.appendChild(option);
            // console.log(i + ' got appended')
            var btn = document.createElement("BUTTON");
            btn.innerHTML = "CLICK ME";
            document.body.appendChild(btn);
            }
        }
    else(console.log('no events'));
});


chrome.storage.local.get(['currentEvent'], function(result) {
    if (result){
    document.getElementById("mytext").value = result.currentEvent;
    console.log("the current event is "+ result.currentEvent)}
    else{
        console.log('no current event')
    }
  });