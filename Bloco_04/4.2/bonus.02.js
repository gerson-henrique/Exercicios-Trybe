let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];





var controle = 0 ;
let flag=0; 
var  revisao = true;
let breaker =0;
let o=0;
let x=0;





for (x = 0; x< (numbers.length) ; x++) {
for (let i = 0; i < numbers.length; i++) {



    if  ( i < numbers.length) {
   

        flag=0; 

        for (o = 0; o < numbers.length; o++) {
        

        if (numbers[i] < numbers[o] ) {
            flag++

        }            
        }


        if (flag == (numbers.length-[i+1]) ) {
            console.log("Está ordenada") 
            console.log(numbers);
            revisao=false
        }
        else { 
            
        console.log("não está ordenada") 
        revisao = true  


        console.log(numbers);

            console.log(numbers[i]);
        if (numbers[i] > numbers[i + 1]) {

        controle = numbers[i];
        console.log( numbers[i])
        numbers[i] = numbers[i+1];
        console.log(numbers[i+1])
        numbers[i+1] = controle;
        console.log(controle)
          

        } 
    }
}

}     

}


