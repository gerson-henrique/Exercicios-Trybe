let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let respostas= numbers[0];

let i = 0;

for ( i = 0; i < numbers.length; i++) {

    if(numbers[i]<respostas){
    respostas=numbers[i]
}
}





    console.log(respostas);


