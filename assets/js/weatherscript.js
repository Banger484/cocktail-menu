var APIKey = "8c833adbed35c6453a1255f89d32c9b8";
var cTemp;
// var formBtn = document.getElementById("BtnSubmit")

// var user = {
//     userName: userName.value,
//     // city: city.value,
//     // favDrink: [],
// }

function getParams() {
	var searchParamsArr = document.location.search.split('&');
	var user = searchParamsArr[0].split('=').pop();
	var city = searchParamsArr[1].split('=').pop();
	localStorage.setItem("userName", JSON.stringify(user))
	weatherApi(city);
	suggestDrink(cTemp);
  }
var coldDayDrinks = ["irish coffee", "Egg Nog - Healthy", "hot toddy"];
var warmDayDrinks = ["Dirty Martini", "Old Fashioned", "Bloody Mary"];
var hotDayDrinks = ["Mojito", "Barracuda", "Tequila Sunrise"];



function suggestDrink() {
  if (cTemp < 40) {
    console.log(
      coldDayDrinks[Math.floor(Math.random() * coldDayDrinks.length)]
    );
  }
  if (cTemp > 70) {
    console.log(hotDayDrinks[Math.floor(Math.random() * hotDayDrinks.length)]);
  } else {
    console.log(
      warmDayDrinks[Math.floor(Math.random() * warmDayDrinks.length)]
    );
  }
}

function weatherApi(city){
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city  + "&appid=" + APIKey + "&units=imperial";
fetch(queryURL)
.then(function (response) {
	if (response.ok) {
		return response.json();
	} else {
		return Promise.reject(response);
	}
})
.then(function(data){
	console.log(data.main.temp)
	var weatherEl = document.getElementById("weather1");
	var date = data.dt;
    var reformatDate = moment(date, "X" ).format("l");
	var dateEl = document.createElement("p")
	dateEl.textContent = reformatDate;
	// dateEl.classList = ""
	weatherEl.appendChild(dateEl);
	var cIcon = data.weather[0].icon
	var iconEl = document.createElement("img")
    iconEl.src = "http://openweathermap.org/img/wn/" + cIcon + "@2x.png"
	// iconEl.classList ="";
	weatherEl.appendChild(iconEl)
	cTemp = data.main.temp;
	var tempEl = document.createElement("p");
	tempEl.textContent = cTemp + " °F";
	// tempEl.classList = "";
	weatherEl.appendChild(tempEl)


}).catch(function (error) {
	console.warn(error);
});
}

getParams();



