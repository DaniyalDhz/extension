
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

// if (chrome.storage.local.get(['list'])){
//   for (i of chrome.storage.local.get(['list']))
//     {
//       var option = document.createElement("option");
//       option.text = i;
//       option.value = "myvalue";
//       var select = document.getElementById("cars");
//       select.appendChild(option);
//       console.log(i + ' got appended')
//       }
// };

// chrome.storage.local.get(['list'], function(result) {
//   for (i of chrome.storage.local.get(['list']))
//     {
//       var option = document.createElement("option");
//       option.text = i;
//       option.value = "myvalue";
//       var select = document.getElementById("cars");
//       select.appendChild(option);
//       console.log(i + ' got appended')
//       }
// });




