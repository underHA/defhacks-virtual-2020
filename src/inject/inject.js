chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		console.log("Hello. This message was sent from scripts/inject.js");
		// ----------------------------------------------------------

		var images = document.getElementsByTagName('img');
		for (var i = 0, l = images.length; i < l; i++) {
			images[i].src = 'https://placem.at/things?w=' + images[i].width + '&h=' + images[i].height;
		}

	}
	}, 10);
});