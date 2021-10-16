/* Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
Exemplo: bishop (bispo) -> diagonals (diagonais) */ 

let piece ="BiShop";

switch (piece.toLowerCase()) {
    case "pawn":
        console.log("O peão se moviementa para frente  1 casa (exeto no movimento de saida, aonde pode se mover duas casas) e ataca pelas diagonais ");
        break;
    case "bishop":
        console.log("O bispo se movimenta e ataca livremente na diagonal");
        break;

        case "tower":
        console.log("a torre se movimenta e ataca livremente horizontal ou verticalmente");
        break;

    default:
        console.log("Função inoperante");
        break;
}