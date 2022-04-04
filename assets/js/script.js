var cocktailByLetter = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=";

function getCocktails(x) {
  fetch(`${cocktailByLetter}${x}`)
    .then(function (res) {
      if (res.status !== 200) {
        console.log("fetch found nothing!");
        return;
      }
      res.json().then(function (data) {
        console.log(data);
      });
    })
    .catch(function (err) {
      console.error(err);
    });
}

getCocktails("c");
