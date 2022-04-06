var userName = document.getElementById('user-input')
var citySearch = document.getElementById("city-input");
var searchFormEL = document.getElementById('searchForm')
var formBtn = document.getElementById("BtnSubmit")
var userNameVal;
var citySearchVal;

function searchInput(event){
	event.preventDefault()
	var userNameVal = document.getElementById('user-input').value
	var citySearchVal = document.getElementById("city-input").value;

    if (citySearch.value == 0 || userName.value == 0 ) {
        alert("must enter a vaild user name and city!");
        return;
	}
	var cocktailLink = './cocktail.html?q=' + userNameVal + '&format=' + citySearchVal;
  	location.assign(cocktailLink);
	// localStorage.setItem("userName", JSON.stringify(userName.value))
}

searchFormEL.addEventListener("submit", searchInput);