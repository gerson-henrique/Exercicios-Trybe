/* Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.*/

const a=10;  
const b=60;
const c=50;
let resultado=a;

if(a>b){
    resultado=a;
    if(a>c){
    resultado=a;
    } else{
       
    }
}
if(b>a){
    resultado=b;
    if(b>c){
        resultado=b;
    }else {
        resultado=c;
    }
} 

console.log(resultado);