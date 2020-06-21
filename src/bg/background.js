// if you checked "fancy-settings", uncomment these lines

// var settings = new Store("settings", {
//     "sample_setting": "This is how you use Store.js to remember values"
// });


//example of using a message handler from the inject scripts







console.log("tesT")




chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse) {
  	console.log(request);
    //sendResponse();
  });
