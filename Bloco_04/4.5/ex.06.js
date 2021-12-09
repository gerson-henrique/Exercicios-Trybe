
let wordCheck

function verificaPalindrome (word){

   wordCheck = word.split("")

   if ( wordCheck == wordCheck.reverse() ){

        console.log ("É palindrome")
   }
    else{     console.log("não é Palindrome")
}
}

verificaPalindrome('arara');