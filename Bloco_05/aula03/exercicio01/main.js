const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');





// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

let highlight = document.getElementsByTagName('li')
let highlightFb = highlight[0]
let highlightSb = highlight[1]
let highlightTb = highlight[2]


highlightFb.addEventListener("click",MudarTag)
highlightSb.addEventListener("click",MudarTag)
highlightTb.addEventListener("click",MudarTag)

  


function MudarTag(eventoDeOrigem) {
    
    controle = document.getElementsByClassName("tech")


    for (let i = controle.length-1; i >= 0; i -= 1) {
       
        controle[i].classList.remove('tech')

    }

    eventoDeOrigem.target.className= "tech"

    console.log(eventoDeOrigem.target)
}

let ctrlC = document.getElementsByTagName('input')
ctrlC[0].addEventListener('change',MudarTexto)

function MudarTexto(){

    let constCheck = document.getElementsByClassName('tech') 

     constCheck.innerText = ctrlC.innerText

     for (let i = constCheck.length-1; i >= 0; i -= 1) {
       
        constCheck[i].innerText = ctrlC[0].value;

    }

}  




// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';


portifolioCall = document.getElementsByTagName('h1')
portifolio = portifolioCall[0]

portifolio.addEventListener('dblclick',chamaPortifolio)
function chamaPortifolio (){

    window.location.href = "https://github.com/gerson-henrique"

}


portifolio.addEventListener('mouseover',trocaCor)
function trocaCor (){

    portifolio.style.color = "BlueViolet"

}





// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portifólio?

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;



// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.