const rt = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const st = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const check = (a,b) => {
  let value = 0
  for(i = 0; i <a.length ; i+=1){
    if(a[i]===b[i]){  
      value += 1
    }else if(b[i]==='N.A'){
      value = value
    }else{
      value -= 0.5
    }
  }
  return value
}

const avaliation = (x, y, val) =>{

  return val(x,y)

}

console.log(avaliation(rt,st,check));