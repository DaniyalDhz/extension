//chrome identity
chrome.identity.getProfileUserInfo(function(userInfo) {
    console.log(JSON.stringify(userInfo));
    console.log(userInfo.email);
    console.log('Hello');
  });

console.log('Hello')''