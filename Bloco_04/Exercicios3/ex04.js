let n = 5;
let asterisco = "";
let espaços = "";
let flag = 1;
let valorDeControle = n;
let ehPar = false;
let alfa = n - 2;
let o;
let a;



// Determina a quantidade de linha e valida se o numero é par ou impar.
for (let i = 0; i < n; i++) {

    if (valorDeControle == 2) {
        ehPar = true;
    }
    if ((valorDeControle - 2) > 0) {
        valorDeControle = valorDeControle - 2;
        flag++;
    }
}

if (ehPar) {
    asterisco = '**';
    valorDeControle = 2
} else {
    asterisco = "*"
    valorDeControle = 1
}
for (i = 0; i < flag; i++) {
    for (o = n; o > 0; o--) {
        if (valorDeControle <= n) {
            for (a = 0; a < alfa; a = a + 2) {
                espaços = espaços + " "
            }
            alfa = alfa - 2;
            console.log(espaços + asterisco + espaços);
            valorDeControle += 2;
            asterisco += '**';
            espaços = "";
        }
    }
}