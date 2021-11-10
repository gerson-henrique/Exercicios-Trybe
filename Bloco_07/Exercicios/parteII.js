
let sum = 1

let fatorial = n => {

  for(i=n;i>0;i-=1){
    
  sum = sum * i
  }
return sum
}

console.log(fatorial(5))