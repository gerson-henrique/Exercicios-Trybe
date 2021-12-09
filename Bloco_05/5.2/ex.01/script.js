

let pai = document.getElementById ("elementoOndeVoceEsta").parentNode
let bthElement = document.createElement("div")
pai.appendChild(bthElement);
bthElement.innerText = "teste 1"

let eu = document.getElementById ("elementoOndeVoceEsta")
let sonElement = document.createElement("div")
pai.appendChild(sonElement);
sonElement.innerText = "teste 2"

let myFilho = document.getElementById ("elementoOndeVoceEsta").firstElementChild
let nepw = document.createElement("div")
myFilho.appendChild(nepw);
nepw.innerText = "teste 3"
nepw.id = "npw"

let way = document.getElementById("npw").parentNode.parentNode.nextElementSibling