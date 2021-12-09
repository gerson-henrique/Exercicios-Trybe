let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let respostas=0;

let i = 0;

for ( i = 0; i < numbers.length; i++) {

    if((numbers[i])%2===0){
    respostas=respostas+0;
}else{
    respostas++
}

}

if(respostas===0){
    console.log("nenhum valor impar encontrado")
} else {

    console.log( "existem "+ respostas+" numeros impares" );
}
