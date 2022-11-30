/* Escreva um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n. Por exemplo: 

n = 5

*****
*****
*****
*****
*****   */

const n = 5;
let line = '';

for (let indexLine = 1; indexLine <= n; indexLine += 1) {
    for (let indexColumn = 1; indexColumn <= n; indexColumn += 1) {
        line += '*'
    }
    console.log(line);
    line = '';
}