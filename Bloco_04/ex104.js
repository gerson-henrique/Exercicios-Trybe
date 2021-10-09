
 // &&
const correntHour = 6;
let message = "";

if( correntHour >= 22){
message="Não deveríamos comer nada, é hora de dormir";
}  else if (correntHour >= 18 &&  correntHour < 22){
message="Rango da noite, vamos jantar :D";
}  else if (correntHour >= 14 && correntHour < 18){
message="Vamos fazer um bolo pro café da tarde?";
}  else if (correntHour >= 11 && correntHour < 14){
message="Hora do almoço!!!";
} else if (correntHour >=4 && correntHour <11){
 message="Hmmm, cheiro de café recém passado";   
}


console.log(message);

// ||

let weekDay = "quarta-feira";

if(weekDay=="segunda-feira"||weekDay=="terça-feira"||weekDay=="quarta-feira"||weekDay=="quinta-feira"||weekDay=="sexta-feira"){
    console.log("Oba, mais um dia de aprendizado na Trybe >:D")
}else if(weekDay=="sabado"||weekDay=="domingo"){
    console.log("FINALMENTE, descanso merecido UwU");
}