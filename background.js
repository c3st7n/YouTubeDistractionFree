localStorage["distracted"] = true;
chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript(null, {file: "yt.js"});
});