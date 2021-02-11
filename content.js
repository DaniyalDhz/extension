//look like not imp file


var globalInterval;

// chrome.identity.getProfileUserInfo(function(userInfo) {
//   console.log(JSON.stringify(userInfo));
//   let userEmail = userInfo.email;
//   let userId = userInfo.id;
// });
globalInterval = setInterval(() => {
    var currenttime = localStorage.getItem('time');
    var settime = localStorage.getItem('settime');
    if (currenttime > settime) {

    }

}, 500);


chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.message == "start") {
            alert('')
        }
    }
);


chrome.storage.local.get(['list'], function(result) {
    if (result) {
        for (i of result.list) {
            var option = document.createElement("option");
            option.text = i;
            option.value = "myvalue";
            // var select = document.getElementById("cars");
            // var select = document.querySelector("cars");
            var select = document.querySelector("#cars");
            select.appendChild(option);
            console.log(i + ' got appended')
        }
    } else(console.log('no events'));
});

// chrome.storage.local.get(['dailyEvents'], function(result) {
//     if (result){
//         for (i of result.dailyEvents)
//             {
//             // var option = document.createElement("button");
//             // option.text = i;
//             // option.value = "myvalue";
//             // var select = document.querySelector("#cars");
//             // select.appendChild(option);
//             // console.log(i + ' got appended')
//             var btn = document.createElement("BUTTON");
//             btn.innerHTML = "CLICK ME";
//             document.body.appendChild(btn);
//             }
//         }
//     else(console.log('no events'));
// });


chrome.storage.local.get(['currentEvent'], function(result) {
    if (result) {
        document.getElementById("enter").value = result.currentEvent;
        console.log("the current event is " + result.currentEvent)
    } else {
        console.log('no current event')
    }
});