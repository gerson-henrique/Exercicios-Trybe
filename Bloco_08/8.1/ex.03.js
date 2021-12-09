const corrector = (arrCorr,arrVerr,func) => {

  return func(arrCorr,arrVerr)
}

const nota = (gabari,prov) => {
let total = 0;
for(i = 0; i < gabari.length; i+=1){
  if(prov[i]=== 'N.A'){
    total = total;
  } else if (prov[i]===gabari[1]) {
    total += 1
  } else {
    total -=1
  }
}

}