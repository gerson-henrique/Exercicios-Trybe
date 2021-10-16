
let arrTest  = [5, 4, 30, 9, 8, 11]
let maiorNumero=0;
let maiorNumeroI=0
function returnIBigeger (arrTest){

    for (const indice in arrTest) {
        
            if (maiorNumero < arrTest[indice]) {
            maiorNumero=arrTest[indice];
            console.log(maiorNumero + " " + arrTest[indice])
            maiorNumeroI = indice
        }
        }
        console.log(maiorNumeroI);
    }
 


    returnIBigeger(arrTest);