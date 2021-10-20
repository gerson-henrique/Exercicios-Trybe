   /*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
       // 1. Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
        2. Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
        3. Crie uma função que mude a cor do quadrado vermelho para branco.
       // 4. Crie uma função que corrija o texto da tag <h1>.
        5. Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
        6. Crie uma função que exiba o conteúdo de todas as tags <p> no console.
        */

   function newText(tag, index, text) {
     let validator = document.getElementsByTagName(tag);
     validator[index].innerText = text;
   }

   function newSquareColor(eClass, index, color) {
     let validator = document.getElementsByClassName(eClass);
     validator[index].style.backgroundColor = color;
   }

   function showBigger(wantBigger, wantShow) {
     let validator = document.getElementsByTagName("p");
     if (wantBigger === true) {
    
       for (let valor in validator) {
         if (validator[valor].innerHTML !== undefined){
          validator[valor].innerHTML = validator[valor].innerHTML.toUpperCase();
        }      
         
         
       }
     }

     if (wantShow === true) {

      for (let valor in validator) {
        if (validator[valor].innerHTML !== undefined){
          console.log(validator[valor].innerHTML) ;
        }   
      
      }
     }
   }

// questão 1
newText("p",0,"Me vejo estágiando no Google")
// questão 2
newSquareColor("main-content",0,"rgb(76,164,109)");
// questão 3
newSquareColor("center-content",0,"white");
// questão 4
newText("h1",0,"Exercício 5.1 - JS");
// questão 5
showBigger(true,false);
// questão 6
showBigger(false,true);