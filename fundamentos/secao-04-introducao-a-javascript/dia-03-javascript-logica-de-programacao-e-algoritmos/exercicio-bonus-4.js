/* Depois, faça uma pirâmide com n asteriscos de base: 

n = 5

  *
 ***
*****

*/

const n = 15; // Tamanho da base
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

// Agora imprimimos as linhas
for (let indexLine = 1; indexLine <= nLines; indexLine += 1) {
  // Aqui desenhamos os espaços vazios à esquerda
  for (let indexSlot = 1; indexSlot <= (2 * (nLines - position)) / 2; indexSlot += 1) {
    line += ' ';
  }
  // Aqui desenhamos o meio, ou seja, os asteriscos
  for (let indexSlot = 1; indexSlot <= (n - (2 * (nLines - position))); indexSlot += 1) {
    line += '*';
  }
  // Aqui desenhamos os espaços vazios à direita
  for (let indexSlot = 1; indexSlot <= (2 * (nLines - position)) / 2; indexSlot += 1) {
    line += ' ';
  }
  console.log(line);
  line = '';
  position += 1;
}