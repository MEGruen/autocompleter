$(document).ready(function () {
	var string = '';
	document.getElementById('search').onkeypress = function(event){
		var value = String.fromCharCode(event.keyCode);
		console.log(string)
		string = string + value;
		var text = new Array();
		$.getJSON(' https://guidebook.com/om/service/v2/search/?q=' + string, function(data) {
			text = data.data;
			element = document.getElementById("search-results");
			var inputString = "";
			for (i = 0; i < text.length; i++) {
   				inputString = inputString + text[i]['name'] + "<br />";
			}
			console.log("input" + inputString)
			element.innerHTML = inputString;
		})
	}
});
