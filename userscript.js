var userName;
var city;


var user = {
    userName: null,
    city: null,
    favDrink: [],
}

var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city  + "&appid=" + APIKey
fetch(queryURL)
.then(function (response) {
	if (response.ok) {
		return response.json();
	} else {
		return Promise.reject(response);
	}
})
.then(function (data) {
      var lat = data.coord.lat
      var lon = data.coord.lon
	return fetch("https://api.openweathermap.org/data/2.5/onecall?" + "lat=" + lat + "&lon=" + lon +"&exclude=minutely,hourly,alerts" +"&appid=" + APIKey + "&units=imperial");
})
.then(function (response) {
	if (response.ok) {
		return response.json();
	} else {
		return Promise.reject(response);
	}
})