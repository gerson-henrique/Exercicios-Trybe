let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numberNew = [];



for (let i = 0; i < numbers.length; i++) {
    
    

    if (i+1 == numbers.length ) {
        
        numberNew.push(numbers[i]*2)

 } else{

        numberNew.push(numbers[i]*numbers[i+1])
    }

}

console.log(numberNew)