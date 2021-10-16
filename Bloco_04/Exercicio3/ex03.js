let n = 5;
let asterisco = "";
let espaços=" ";




for (let i = 0; i <  n ; i++) {
    
    for (let o =(n-i-1); o > 0 ; o--) {
    
        espaços += ' ';
                
    
    }

    asterisco += '*'
    
  
    
    console.log(espaços+asterisco);
    espaços = " ";  
    

}

