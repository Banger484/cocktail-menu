var holder = document.getElementById('modal-holder')

function modalCreator (drink) {
  removeAllChildNodes(holder)
  var modalContainer = document.createElement('div')
  modalContainer.setAttribute('class', 'modal')
  holder.appendChild(modalContainer)
  var shell = document.createElement('div')
  shell.setAttribute('class', 'modal-shell')
  modalContainer.appendChild(shell)
  var closeBtn = document.createElement('span')
  closeBtn.setAttribute('class', 'close')
  closeBtn.textContent = '❌'
  closeBtn.addEventListener('click', function() {
    modalContainer.style.display = 'none'
  })
  shell.appendChild(closeBtn)
  var modalContent = document.createElement('div')
  shell.appendChild(modalContent)
  var drinkTitle = document.createElement('h1')
  drinkTitle.textContent = drink.strDrink
  modalContent.appendChild(drinkTitle)
  var drinkImg = document.createElement('img')
  drinkImg.setAttribute('src', drink.strDrinkThumb)
  modalContent.appendChild(drinkImg)
  var ingredientContainer = document.createElement('div')
  var recipeContainer = document.createElement('div')
  modalContent.appendChild(ingredientContainer)
  modalContent.appendChild(recipeContainer)
  var ingredientTitle = document.createElement('h3')
  ingredientTitle.textContent = 'Ingredients:'
  ingredientContainer.appendChild(ingredientTitle)
  var ingredientList = document.createElement('ul')
  ingredientContainer.appendChild(ingredientList)
  for (let i = 1; i < 16; i++) {
    var num = i;
    var ingredient = 'strIngredient';
    var measurement = 'strMeasure';
    if (drink[ingredient + num] !== null && drink[measurement + num] !== null){
        var ing = drink[ingredient + num]
        var meas = drink[measurement + num]
        var MeasurementIngredient = document.createElement('li')
        MeasurementIngredient.textContent = `${meas} ${ing}`
        ingredientList.appendChild(MeasurementIngredient)
    }
    
  }
  var recipeTitle = document.createElement('h3')
  recipeTitle.textContent = 'Instructions:'
  recipeContainer.appendChild(recipeTitle)
  var recipeInfo = document.createElement('p')
  recipeInfo.textContent = drink.strInstructions
  recipeContainer.appendChild(recipeInfo)
}