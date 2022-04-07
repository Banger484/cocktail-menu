var userName = document.getElementById("user-input");
var zipSearch = document.getElementById("zip-input");
var searchFormEL = document.getElementById("searchForm");
var formBtn = document.getElementById("BtnSubmit");
var userNameVal;
var zipSearchVal;

function searchInput(event) {
  event.preventDefault();
  userNameVal = document.getElementById("user-input").value;
  zipSearchVal = document.getElementById("zip-input").value;

  if (zipSearch.value == 0 || userName.value == 0) {
    return;
  }
  var cocktailLink =
    "./cocktail.html?q=" + userNameVal + "&format=" + zipSearchVal;
  location.assign(cocktailLink);
  localStorage.setItem("userName", JSON.stringify(userName.value));
  localStorage.setItem("zipCode", JSON.stringify(zipSearch.value));
}

searchFormEL.addEventListener("submit", searchInput);
