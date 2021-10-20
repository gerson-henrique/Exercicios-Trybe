document.querySelector("#header-container").style.backgroundColor = "MediumSeaGreen";
document.querySelector("#container").style.backgroundColor = "HoneyDew";
document.querySelector(".emergency-tasks").style.backgroundColor = "Salmon";
document.querySelector(".no-emergency-tasks").style.backgroundColor = "Khaki";
 let colorC = document.querySelectorAll(".emergency-tasks h3");
 let colorB = document.querySelectorAll(".no-emergency-tasks h3");
 
 

 for(let itens in colorC  ){
colorC[itens].style.backgroundColor = "DarkOrchid";
colorB[itens].style.backgroundColor = "Black";
 }

