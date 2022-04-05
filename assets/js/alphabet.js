var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var letterBox = document.getElementById('header')

function letterSearch () {
    for (let i = 0; i < alphabet.length; i++) {
        var button = document.createElement('button')
        button.textContent = alphabet[i].toUpperCase()
        letterBox.appendChild(button)
        var letter = alphabet[i]
        if(letter === 'u' || letter === 'x'){
            button.addEventListener('click', function () {
                console.log('No drinks found with those search parameters');
            })
        } else {
            button.addEventListener('click', function () {
                removeAllChildNodes(cardHolder)
                getCocktails(alphabet[i])
            })
        }
    }
}

letterSearch()

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}