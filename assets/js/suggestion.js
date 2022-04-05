var coldDayDrinks = ["irish coffee", "Egg Nog - Healthy", "hot toddy"];
var warmDayDrinks = ["Dirty Martini", "Old Fashioned", "Bloody Mary"];
var hotDayDrinks = ["Mojito", "Barracuda", "Tequila Sunrise"];

var cTemp = 60;

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

suggestDrink();
