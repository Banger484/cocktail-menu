var cocktailByLetter = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=";
var container = document.getElementById('container')
var drink;

var coldDayDrinks = []
var warmDayDrinks = []
var hotDayDrinks = []


function getCocktails(firstLetter) {
  fetch(`${cocktailByLetter}${firstLetter}`)
    .then(function (res) {
      if (res.status !== 200) {
        console.log("fetch found nothing!");
        return;
      }
      res.json().then(function (data) {
        console.log(data);
        var drinks = data.drinks
        for (let i = 0; i < drinks.length; i++) {
          // basic structure for individual cocktail cards.
          drink = data.drinks[i]
          console.log(drink.strDrink)
          console.log(drink.strInstructions)
          console.log(drink.strGlass);

          getRecipe(drink)
          
        }

  
      });
    })
    .catch(function (err) {
      console.error(err);
    });
}

getCocktails("h");




