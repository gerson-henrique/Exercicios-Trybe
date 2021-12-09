/* Faça um programa que defina três constantes com os valores dos três ângulos internos de um 
triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , 
caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
Um ângulo será considerado inválido se não tiver um valor positivo. */

const anguloA = 160;
const anguloC = 10;
const anguloB = 10;
let triangulo;
if (anguloA>0&&anguloB>0&&anguloC>0 ){
    if((anguloA+anguloB+anguloC)==180){
triangulo = true;
    } else {
        triangulo = false;
    }
console.log(triangulo);
} 
 else{
    console.log("Tringulo invalido");
}