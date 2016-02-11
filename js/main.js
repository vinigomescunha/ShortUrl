short = {
	url: "",
	s: "",
	request: function () {
		var request = new XMLHttpRequest();
		request.open('GET', 'req?url=' + short.url + '&s=' + short.s , true);
		request.onload = function() {
		if (request.status >= 200 && request.status < 400) {
			var resp = request.responseText;
			document.querySelectorAll("#result")[0].innerHTML = " <h2>Success</h2>\n<br />The url generated here: <a target=_blank href=" + resp + ">" + resp + "</a> " ;
			short.s = short.url = "";
			document.querySelectorAll("#url")[0].value = "";	
		  } else {
			console.log("Error!!");
		  }
		};
		request.send();
	}
};

document.querySelectorAll("#short")[0].addEventListener("click", function() { 
	url = document.querySelectorAll("#url")[0].value,
	s = document.querySelectorAll("#s")[0].value,
	result = document.querySelectorAll("#result")[0];
	if(url == '') { 
		result.innerHTML = "<h2> Error! Choose a url... </h2>" ;
		return false;
	}
	short.url = url, short.s = s;
	short.request();
	result.innerHTML = "<h2> Wait .... </h2>";
});
