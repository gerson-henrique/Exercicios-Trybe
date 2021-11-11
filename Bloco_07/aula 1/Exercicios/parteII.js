


let fatorial = n => {
  let sum = 1
  for(i=n;i>0;i-=1){
    
  sum = sum * i
  }
return sum
}

let longestWord = s => {
  let biggerWord = '';
  let biggerLength = 0;

  s.split(' ')

  for(i=0;i<s.length;i+=1){
   let word = s[i]

   (word.length > biggerLength ) ? (biggerWord = word, biggerLength  = word.length ) :   
   
  } 


}