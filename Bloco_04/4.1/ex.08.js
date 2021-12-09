/* Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
Bonus: use somente um if .*/

const a=2;
const b=4;
const c=8;

let ePar;

switch (a) {
    case 1:
        ePar=false;
        console.log(ePar);
        break;

    default:

    switch (b) {
        case 1:
            ePar=false;
            console.log(ePar);
            
            break;

        default:
            switch (c) {
                case 1:
                    ePar=false;
                    console.log(ePar);
                    break;
            
                default:
                    if ((a+b+c)%2==0){
                        ePar=true;
                        console.log(ePar);
                    }
                    break;
            }
            break;
    }
        break;
}
