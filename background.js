chrome.contextMenus.create({
  "title": "Lookup on Google Maps",
  "contexts": ["page", "selection"],
  "onclick": function(e) {
    var address = encodeURI(e.selectionText);
    var url = "https://maps.google.com/maps?q=" + address;
    chrome.tabs.create({
      "url": url
    });
  }
});
