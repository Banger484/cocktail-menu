var userName;
var city;
var APIKey = "8c833adbed35c6453a1255f89d32c9b8";


var user = {
    userName: null,
    city: null,
    favDrink: [],
}

var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + "chicago"  + "&appid=" + APIKey +"&units=imperial";
fetch(queryURL)
.then(function (response) {
	if (response.ok) {
		return response.json();
	} else {
		return Promise.reject(response);
	}
})
.then(function(data){
	console.log(data)

	var date = data.dt;
    var reformatDate = moment(date, "X" ).format("l");
	var dateEl = document.createElement("p")
	dateEl.textContent = reformatDate;
	dateEl.classList = ""
	placeholder.appendChild(dateEl);


	var cTemp = data.main.temp;
	var tempEl = document.createElement("p");
	tempEl.text = cTemp + " °F";
	tempEl.classList = ""
	placeholder.appendChild(tempEl)
	

	var cIcon = data.weather[0].icon
	var iconEl = document.createElement("img")
    iconEl.src = "http://openweathermap.org/img/wn/" + cIcon + "@2x.png"
	iconEl.classList ="";
	placeholder.appendChild(iconEl)

})






