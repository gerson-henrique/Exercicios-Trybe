
let blue = document.getElementById("pai");

for (let i = blue.childNodes.length - 1; i >= 0; i -= 1) {
    const azure = blue.childNodes[i];
    if (azure.id !== 'elementoOndeVoceEsta' ) {
      azure.remove();
    }
  }
let red = document.getElementById('elementoOndeVoceEsta')

for (i = red.childNodes.length -1 ; i >= 0  ;i -=1) {
    const crimisson = red.childNodes[i];
    if(crimisson.id !== 'primeiroFilhoDoFilho' )
crimisson.remove();
}



  console.log (blue)