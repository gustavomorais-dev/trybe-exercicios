/* Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:

n = 7

   *
  * *
 *   *
*******

*/

const n = 21; // Tamanho da base
let line = ''; // Recebe os valores da linha para serem impressos
let nLines = 0; // Número de linhas que serão necessárias para criar a pirâmide
let nOperator = n; // Operador para contagem de linhas necessárias
let nAsterix = 0; // Recebe o número de asteriscos que foram inseridos na linha

// Primeiro definimos o número de linhas que serão mostradas
while (nOperator > 0) {
    nOperator -= 2;
    nLines += 1;
}

let position = 1; // Esta variável auxilia a localizar em qual linha estamos trabalhando
let midSpaces = -1; // Esta variável auxilia a colocara a quantidade correta de espaços vazios no centro

// Agora imprimimos as linhas
for (let indexLine = 1; indexLine <= nLines; indexLine += 1) {
    // Aqui desenhamos os espaços vazios à esquerda
    for (let indexSlot = 1; indexSlot <= (2 * (nLines - position)) / 2; indexSlot += 1) {
        line += ' ';
    }
    // Aqui desenhamos linha do topo da pirâmide, que sempre tem um * no meio
    if (position === 1) {
        line += '*';
    }
    // Aqui desenhamos a "borda esquerda" de asteriscos da pirâmide
    if (position > 1 && position < nLines) {
        line += '*';
        midSpaces += 2;
    }
    // Aqui desenhamos os espaços vazios no meio da pirâmide
    if (position > 1 && position < nLines) {
        for (let indexSlot = 1; indexSlot <= midSpaces; indexSlot += 1) {
            line += ' ';
        }
    }
    // Aqui desenhamos a "borda direita" de asteriscos da pirâmide
    if (position > 1 && position < nLines) {
        line += '*';
    }
    // Aqui desenhamos os espaços vazios à direita
    for (let indexSlot = 1; indexSlot <= (2 * (nLines - position)) / 2; indexSlot += 1) {
        line += ' ';
    }
    // Aqui desenhamos a base da pirâmide, que é sempre full *
    if (position == nLines) {
        for (let indexSlot = 1; indexSlot <= n; indexSlot += 1) {
            line += '*';
        }
    }
    console.log(line);
    line = '';
    position += 1;
}