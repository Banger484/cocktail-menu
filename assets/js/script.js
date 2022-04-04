var cocktailByLetter = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=";
var container = document.getElementById('container')
var drink;




function getCocktails(firstLetter) {
  fetch(`${cocktailByLetter}${firstLetter}`)
    .then(function (res) {
      if (res.status !== 200) {
        console.log("fetch found nothing!");
        return;
      }
      res.json().then(function (data) {
        drink = data.drinks[1]
        console.log(drink)
        console.log(`${drink.strMeasure1} ${drink.strIngredient1}`)
        console.log(`${drink.strMeasure1} ${drink.strIngredient1}`)
  console.log(`${drink.strMeasure2} ${drink.strIngredient2}`)
  console.log(`${drink.strMeasure3} ${drink.strIngredient3}`)
  console.log(`${drink.strMeasure4} ${drink.strIngredient4}`)
       
      });
    })
    .catch(function (err) {
      console.error(err);
    });
}

getCocktails("c");

function getRecipe (d) {
if ()



}

getRecipe()
