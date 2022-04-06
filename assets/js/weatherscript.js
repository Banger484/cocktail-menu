var APIKey = "8c833adbed35c6453a1255f89d32c9b8";
var cTemp;
var user;
var coldDayDrinks = ["irish coffee", "Egg Nog - Healthy", "hot toddy"];
var warmDayDrinks = ["Dirty Martini", "Old Fashioned", "Bloody Mary"];
var hotDayDrinks = ["Mojito", "Barracuda", "Tequila Sunrise"];
var zip;
userWelcomeEl = document.getElementById("userWelcome")
var weatherEl;
var userEl;
var searchUsers = JSON.parse(window.localStorage.getItem("userName")) || [];


// var user = {
//     userName: userName.value,
//     // city: city.value,
//     // favDrink: [],
// }


function getParams() {
	var searchParamsArr = document.location.search.split('&');
	user = searchParamsArr[0].split('=').pop();
	zip = searchParamsArr[1].split('=').pop();

	if (searchUsers.includes(user.value)) {
		userEl = document.createElement("p");
		userWelcomeEl.appendChild(userEl);
		userWelcomeEl.textContent = "Welcome Back " + user + "!";
			return;
		}else {    
		// searchUsers.push(user.value)
		userEl = document.createElement("p");
		userWelcomeEl.appendChild(userEl);
		userWelcomeEl.textContent = "Welcome " + user + "!";
		localStorage.setItem("userName", JSON.stringify(user.value));
		}
	weatherApi(zip);
	suggestDrink(cTemp);
	
}

// function userNameFun() {
// 	if (searchUsers.includes(user.value)) {
// 	userEl = document.createElement("p");
// 	userWelcomeEl.appendChild(userEl);
// 	userWelcomeEl.textContent = "Welcome Back " + user + "!";
//         return;
//     }else {    
//     searchUsers.push(user.value)
// 	userEl = document.createElement("p");
// 	userWelcomeEl.appendChild(userEl);
// 	userWelcomeEl.textContent = "Welcome" + user + "!";
// 	localStorage.setItem("userName", JSON.stringify(searchUsers));
// }}

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
var queryURL = "http://api.openweathermap.org/data/2.5/weather?zip=" + zip  + "&appid=" + APIKey + "&units=imperial";
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
	weatherEl = document.getElementById("weather");
	var date = data.dt;
    var reformatDate = moment(date, "X" ).format("l");
	var dateEl = document.createElement("p");
	dateEl.textContent = "Today is " + reformatDate;
	// dateEl.classList = ""
	weatherEl.appendChild(dateEl);
	var city = data.name;
	var cityEl = document.createElement("p");
	weatherEl.appendChild(cityEl);
	cityEl.textContent = city;
	var cIcon = data.weather[0].icon;
	var iconEl = document.createElement("img");
    iconEl.src = "http://openweathermap.org/img/wn/" + cIcon + "@2x.png";
	// iconEl.classList ="";
	weatherEl.appendChild(iconEl);
	var condition = data.weather[0].description;
	var conditionEl = document.createElement('p');
	weatherEl.appendChild(conditionEl);
	conditionEl.textContent = condition;
	cTemp = data.main.temp;
	var tempEl = document.createElement("p");
	tempEl.textContent = `Current Temperature: ${cTemp} °F`;
	// tempEl.classList = "";
	weatherEl.appendChild(tempEl);
});
}

getParams();