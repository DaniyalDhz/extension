//chrome identity
chrome.identity.getProfileUserInfo(function(userInfo) {
    console.log(JSON.stringify(userInfo));
    let userEmail = userInfo.email;
    let userId = userInfo.id;
});


let email = 'daniyaldehleh@gmail.com'
let startTime = '2PM'
let endTime = '3PM'
let calendarName = 'programming'


let user = {
  'email':email,
  'startTime':startTime,
  'endTime':endTime,
  'calendarName':calendarName
};



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


chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.greeting == "hello")
      sendResponse({farewell: "goodbye"});
  }
)

