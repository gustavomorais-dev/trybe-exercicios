/* Utilize switch/case para escrever um código que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
Como desafio, escreva um código para funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.

Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).

Se a peça passada for inválida, o código deve retornar uma mensagem de erro.

Exemplo: bishop (bispo) -> diagonals (diagonais) */

const peca = 'CaVALo';

switch (peca.toLowerCase()) {
    case 'peão':
        console.log("Para frente");
        break;

    case 'bispo':
        console.log("Diagonalmente");
        break;

    case 'torre':
        console.log("Horizontalmente e verticalmente");
        break;

    case 'cavalo':
        console.log("Em L");
        break;

    case 'rainha':
        console.log("Horizontalmente, verticalmente e diagonalmente");
        break;

    case 'rei':
        console.log("Uma casa adjacente");
        break;
    default:
        console.log("Peça inválida");
}