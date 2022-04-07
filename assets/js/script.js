var cocktailByLetter =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=";
var cocktailByName =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
var drink;
var cardHolder = document.getElementById("search-results");

function getCocktail(x) {
  fetch(`${cocktailByName}${x}`).then(function (res) {
    if (res.status !== 200) {
      console.log("fetch found nothing!");
      return;
    }
    res.json().then(function (data) {
      var drink = data.drinks[0];
      modalCreator(drink);
    });
  });
}

function getCocktails(x) {
  fetch(`${cocktailByLetter}${x}`)
    .then(function (res) {
      if (res.status !== 200) {
        console.log("fetch found nothing!");
        return;
      }
      res.json().then(function (data) {
        var drinks = data.drinks;
        for (let i = 0; i < drinks.length; i++) {
          var card = document.createElement("div");
          card.addEventListener("click", function () {
            var currentDrink = drinks[i].strDrink;

            getCocktail(currentDrink);
          });
          card.setAttribute("class", "drink-card");
          cardHolder.appendChild(card);
          var drinkImg = document.createElement("img");
          drinkImg.setAttribute("src", drinks[i].strDrinkThumb);
          card.appendChild(drinkImg);
          var drinkName = document.createElement("p");
          drinkName.textContent = drinks[i].strDrink;
          card.appendChild(drinkName);
        }
      });
    })
    .catch(function (err) {
      console.error(err);
    });
}

