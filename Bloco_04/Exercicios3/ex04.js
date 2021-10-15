let n = 9;
let asterisco = "";
let espaços="";
let flag=1;
let valorDeControle=0;
let valorDeControleII=0;
let ehPar = false;
 let o;
 let a;

 let PaineldeControle =0


let metaControle =0;
let metaControleII = 0;
 
 
 

 valorDeControle = n; 
for (let i = 0; i < n; i++) {

if(valorDeControle==2){
    ehPar = true;
}
    
    
if ((valorDeControle - 2) > 0 ) {
    valorDeControle= valorDeControle-2;
    flag ++;
}}

console.log(flag);


if (ehPar){
    asterisco ='**';
     metaControle =2
} else {
    asterisco="*"
    metaControle=1
}





for (i=0;i<flag;i++){

    for (let o = n; o > 0 ; o--) {
        


        if( metaControle <= n){

            for (let p = 0; p < n; p = p + 2 ) {
            for (let ox = 0; ox < n; ox = ox + 2 ) {   
                espaços=espaços + " "
                
            }
        }
            
        console.log(espaços+asterisco+espaços);
        metaControle += 2;
        asterisco+= '**';
        espaços="";
    }
    
}

}





