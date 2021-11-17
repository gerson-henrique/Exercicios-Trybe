

const cassino = (bet, func) => {

const result =  Math.floor( Math.random() * (5-1) + 1);
return func(bet,result)

}

const checkBet= (numberBet,numberSort) => {
  console.log (numberSort)
 return (numberBet === numberSort) ? 'Você Ganhou!!' : 'Tente De novo!!'
}

console.log(cassino(4,checkBet))